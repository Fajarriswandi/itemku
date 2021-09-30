import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function ListProduct(props) {

    const [data] = useState(props.data);

    let options = data.map(data => (
        <a href={"detail/" + data.id} key={data.id}>
            <img src={data.thumbnail} alt={data.title} />
            <div className="content">
                <div className="titleProduct">{data.title}</div>
                <div className="subtitle">{data.subtitle}</div>
                <div className="stock">Stock {data.stock}</div>
                <div className="discount"><span>{data.discountPercent}</span><small>Rp{data.discountPrice}</small></div>
                <div className="price">Rp{data.price}</div>
                <div className="deliveryTime">{data.deliveryTime}</div>
            </div>
            <div className="productShold">{data.shold} Produk terjual</div>
        </a>

    ));


    return (
        <Carousel responsive={responsive} className="listContainer"
            arrows={true}
            draggable={true}
            swipeable={true}
        >
            {options}

        </Carousel>
    );
}



