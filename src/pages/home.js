import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import Logo from "../assets/img/logo.svg";
import ListProduct from "../components/ListProduct";
import Thumbnail from "../assets/img/thumbnail.jpg";

// Sample data
const data = [
    { id: "1", title: "1000 Apex Coins", thumbnail: Thumbnail, subtitle: "Apex legend PC", stock: "95", stockStatus:true, discountPercent: "20%", discountPrice: "200.000", price: "150.000", deliveryTime: "5 Menit", shold: "1542" },
    { id: "2", title: "600 UC", thumbnail: Thumbnail, subtitle: "PUBM Mobile", stock: "12", stockStatus:false, discountPercent: "30%", discountPrice: "100.000", price: "150.000", deliveryTime: "10 Menit", shold: "1542" },
    { id: "3", title: "366 Diamon", thumbnail: Thumbnail, subtitle: "category", stock: "132", stockStatus:false, discountPercent: "60%", discountPrice: "200.000", price: "150.000", deliveryTime: "5 Menit", shold: "845" },
    { id: "4", title: "Four", thumbnail: Thumbnail, subtitle: "category", stock: "512", stockStatus:true, discountPercent: "10%", discountPrice: "50.000", price: "150.000", deliveryTime: "15 Menit", shold: "558" },
    { id: "5", title: "Five", thumbnail: Thumbnail, subtitle: "category", stock: "48", stockStatus:true, discountPercent: "60%", discountPrice: "20.000", price: "150.000", deliveryTime: "5 Menit", shold: "957" },
];


export default function Home() {
    return (
        <div className="containerApp">
            <StatusBar />
            <a href="#" className="logo"><img src={Logo} alt="logo" /></a>
            <br />

            <div className="listProduct">
                <div className="title">Termurah di seluru indonesia</div>
                <ListProduct data={data} />
            </div>

            <div className="listProduct">
                <div className="title">Produk mobile legend terpopuler</div>
                <ListProduct data={data} />
            </div>
            
        </div>
    );
}