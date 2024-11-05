import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { BaseUrl } from '../../BaseUrl/url';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './Admin.scss';

const socket = io(`${BaseUrl}`);

export default function Orders() {
  const [groupedOrders, setGroupedOrders] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Listen for order updates
    socket.on('allOrders', (data) => {
      if (data.success) {
        const grouped = groupOrdersByDate(data.result);
        setGroupedOrders(grouped);
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off('allOrders');
    };
  }, []);

  const groupOrdersByDate = (orders) => {
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    return orders.reduce((groups, order) => {
      const date = new Date(order.date);
      // Format date to match the 'YYYY-MM-DD' format of the date picker
      const formattedDate = date.toISOString().split('T')[0];
      if (!groups[formattedDate]) {
        groups[formattedDate] = [];
      }
      groups[formattedDate].push(order);
      return groups;
    }, {});
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const downloadExcel = () => {
    const orders = groupedOrders[selectedDate];
    if (!orders || orders.length === 0) {
      alert('No orders for the selected date');
      return;
    }

    // Define custom headers (adjust these to match your data fields)
    const headers = [["رقم الأوردر", "الأسم ", "العنوان ", "البلد", "رقم التليفون", "رقم التليفون الثاني ", "عدد الكتب", "الملاحظات", "التاريخ"]];

    // Define the keys that correspond to your headers in each order object
    const fieldsToExport = ["_id", "name", "adress", "country", "phone", "secondPhone", "numberOfbooks", "comments", "date"];

    // Filter orders to include only the specified fields
    const filteredOrders = orders.map(order => {
      let filteredOrder = {};
      fieldsToExport.forEach((field, index) => {
        filteredOrder[headers[0][index]] = order[field]; // Map each field to its header
      });
      return filteredOrder;
    });

    // Convert the filtered data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(filteredOrders);

    // Add headers to the worksheet at the beginning
    XLSX.utils.sheet_add_aoa(worksheet, headers, { origin: "A1" });

    // Create a new workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `Orders_${selectedDate}`);

    // Generate a buffer for the workbook and create a Blob to trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, `Orders_${selectedDate}.xlsx`);
  };


  return (
    <div className='mainOfOrders'>
      <h1>Orders</h1>

      <label htmlFor="datePicker">Choose Date: </label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <button className='order-button' onClick={downloadExcel} disabled={!selectedDate}>
        Download Orders
        {/* for {selectedDate} */}
      </button>

      {Object.entries(groupedOrders).map(([date, orders]) => (
        <div key={date} className='ordersByDate'>
          <h2>Orders on {date}</h2>
          {orders.map((order, index) => (
            <table key={index} className='orderTable'>
              <tr>
                <th>الأسم</th>
                <td>{order.name}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{order.adress}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{order.country}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{order.phone}</td>
              </tr>
              <tr>
                <th>Second Phone</th>
                <td>{order.secondPhone ? order.secondPhone : "لا يوجد بيانات"}</td>
              </tr>
              <tr>
                <th>Number Of Books</th>
                <td>{order.numberOfbooks}</td>
              </tr>
              <tr>
                <th>Comments</th>
                <td>{order.comments ? order.comments : "لا يوجد بيانات"}</td>
              </tr>
            </table>
          ))}
        </div>
      ))}
    </div>
  );
}
