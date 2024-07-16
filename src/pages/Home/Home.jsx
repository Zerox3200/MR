import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Landing from '../../components/landing/Landing';

export default function Home() {
    const [Scrolled, setScrolled] = useState(false);


    return <>
        <Nav Scrolled={Scrolled} setScrolled={setScrolled} />
        <Landing />
    </>
}
