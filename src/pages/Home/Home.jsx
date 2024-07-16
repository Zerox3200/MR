import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Landing from '../../components/landing/Landing';
import Intro from '../../components/Intro/Intro';
import ScreenShots from '../../components/ScreenShots/ScreenShots';
import Frequenly from '../../components/Frequenly/Frequenly';
import Order from '../../components/Order/Order';

export default function Home() {
    const [Scrolled, setScrolled] = useState(false);


    return <>
        <Nav Scrolled={Scrolled} setScrolled={setScrolled} />
        <Landing />
        <Intro />
        <ScreenShots />
        <Frequenly />
        <Order />
    </>
}
