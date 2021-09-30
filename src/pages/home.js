import React from "react";
import FeatherIcon from 'feather-icons-react';
import StatusBar from "../components/StatusBar";
import Logo from "../assets/img/logo.svg";
import ListProduct from "../components/ListProduct";

export default function Home() {
    return (
        <div className="containerApp">
            <StatusBar />
            <a href="#" className="logo"><img src={Logo} alt="logo" /></a>
            <br />
            <ListProduct/>
            <ListProduct/>
        </div>
    );
}