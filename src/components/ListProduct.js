import React from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatherIcon from 'feather-icons-react';
import Thumbnail from "../assets/img/thumbnail.jpg";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function ListProduct() {
    return (
        <div className="listProduct">
            <div className="title">Termurah di seluru indonesia</div>

            <Carousel responsive={responsive} className="listContainer"
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container"
            draggable
            focusOnSelect={false}
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            slidesToSlide={1}
            swipeable
            >
                <a href="/detail">
                    <img src={Thumbnail} alt="Thumbnail" />
                    <div className="content">
                        <div className="titleProduct">Ticket Rp 199000</div>
                        <div className="subtitle">Saga of Skywalkers</div>
                        <div className="stock">Stock 999+</div>
                        <div className="price">Rp129.900</div>
                        <div className="deliveryTime">10 Menit kirim</div>
                    </div>
                    <div className="productShold">1000 produk terjual</div>
                </a>
                <a href="/detail">
                    <img src={Thumbnail} alt="Thumbnail" />
                    <div className="content">
                        <div className="titleProduct">600 UC</div>
                        <div className="subtitle">PUBG Mobile</div>
                        <div className="stock">Stock 999+</div>
                        <div className="discount"><span>99%</span><small>Rp200.000</small></div>
                        <div className="price">Rp100.900</div>
                        <div className="deliveryTime">10 Menit kirim</div>
                    </div>
                    <div className="productShold">1000 produk terjual</div>
                </a>
                <a href="/detail">
                    <img src={Thumbnail} alt="Thumbnail" />
                    <div className="content">
                        <div className="titleProduct">Ticket Rp 199000</div>
                        <div className="subtitle">Saga of Skywalkers</div>
                        <div className="stock">Stock 999+</div>
                        <div className="price">Rp129.900</div>
                        <div className="deliveryTime">10 Menit kirim</div>
                    </div>
                    <div className="productShold">1000 produk terjual</div>
                </a>
                <a href="/detail">
                    <img src={Thumbnail} alt="Thumbnail" />
                    <div className="content">
                        <div className="titleProduct">600 UC</div>
                        <div className="subtitle">PUBG Mobile</div>
                        <div className="stock">Stock 999+</div>
                        <div className="discount"><span>99%</span><small>Rp200.000</small></div>
                        <div className="price">Rp100.900</div>
                        <div className="deliveryTime">10 Menit kirim</div>
                    </div>
                    <div className="productShold">1000 produk terjual</div>
                </a>
                <a href="/detail">
                    <img src={Thumbnail} alt="Thumbnail" />
                    <div className="content">
                        <div className="titleProduct">Ticket Rp 199000</div>
                        <div className="subtitle">Saga of Skywalkers</div>
                        <div className="stock">Stock 999+</div>
                        <div className="price">Rp129.900</div>
                        <div className="deliveryTime">10 Menit kirim</div>
                    </div>
                    <div className="productShold">1000 produk terjual</div>
                </a>
                <a href="/detail">
                    <img src={Thumbnail} alt="Thumbnail" />
                    <div className="content">
                        <div className="titleProduct">600 UC</div>
                        <div className="subtitle">PUBG Mobile</div>
                        <div className="stock">Stock 999+</div>
                        <div className="discount"><span>99%</span><small>Rp200.000</small></div>
                        <div className="price">Rp100.900</div>
                        <div className="deliveryTime">10 Menit kirim</div>
                    </div>
                    <div className="productShold">1000 produk terjual</div>
                </a>
            </Carousel>
        </div>
    );
}



