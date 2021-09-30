import React, { useState } from "react";
import StatusBar from "../components/StatusBar";
import Logo from "../assets/img/logo.svg";
import ListProduct from "../components/ListProduct";
import Thumbnail from "../assets/img/thumbnail.jpg";
import FeatherIcon from 'feather-icons-react';

const data = [
    { id: "1", title: "1000 Apex Coins", thumbnail: Thumbnail, subtitle: "Apex legend PC", stock: "95", discountPercent: "20%", discountPrice: "200.000", price: "150.000", deliveryTime: "5 Menit", shold: "1542" },
    { id: "2", title: "600 UC", thumbnail: Thumbnail, subtitle: "PUBM Mobile", stock: "12", discountPercent: "30%", discountPrice: "100.000", price: "150.000", deliveryTime: "10 Menit", shold: "1542" },
    { id: "3", title: "366 Diamon", thumbnail: Thumbnail, subtitle: "category", stock: "132", discountPercent: "60%", discountPrice: "200.000", price: "150.000", deliveryTime: "5 Menit", shold: "845" },
    { id: "4", title: "Four", thumbnail: Thumbnail, subtitle: "category", stock: "512", discountPercent: "10%", discountPrice: "50.000", price: "150.000", deliveryTime: "15 Menit", shold: "558" },
    { id: "5", title: "Five", thumbnail: Thumbnail, subtitle: "category", stock: "48", discountPercent: "60%", discountPrice: "20.000", price: "150.000", deliveryTime: "5 Menit", shold: "957" },
];

export default function Detail() {

    const [wishlistActive, setWishlistActive] = useState(false);

    const [descActive, setActiveDesc] = useState(false);


    return (
        <div className="containerApp detailPage">

            <StatusBar />

            <div className="content">
                <header>
                    <a href="#"><img src={Thumbnail} alt="Thumbnail" /></a>
                    <div className="detailNav">
                        <div>
                            <a href="/"><FeatherIcon icon="chevron-left" /></a>
                        </div>
                        <div>
                            <a href="#"><FeatherIcon icon="share-2" /></a>
                            <a href="#"><FeatherIcon icon="shopping-cart" /></a>
                        </div>
                    </div>
                </header>

                <section className="detailPrice">
                    <div className="titleProduct">366 Diamons</div>
                    <div className="subtitle">Mobile Legends</div>
                    <div className="price">Rp 250.000 <span>per 1 topup</span></div>
                    <div className="discount"><span>58%</span><small>Rp 152.000</small></div>

                    <div class="wrapperWishlist" >
                        <div onClick={() => setWishlistActive(!wishlistActive)} className={`icon-wishlist ${wishlistActive ? "in-wishlist" : ""}`}></div>
                    </div>

                </section>

                <section>
                    <div className="title">Deskripsi Produk</div>
                    <div className={`description line-clamp ${descActive ? "full" : ""}`}>
                        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

                    </div>
                    <span className="readMoreDesc" onClick={() => setActiveDesc(!descActive)}>{`${descActive ? "Kecilkan" : "Selengkapnya"}`}</span>
                </section>

            </div>
            <br />
            <div className="listProduct">
                <div className="title">Pengiriman tercepat</div>
                <ListProduct data={data} />
            </div>

        </div>
    );
}