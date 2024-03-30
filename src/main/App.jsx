import React from 'react'
import './App.css'

import Logo from "../components/templates/Logo";
import Main from "../components/templates/Main";
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';


export default prosp =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>