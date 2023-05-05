import React from "react";
import images from "../../data/img/images"
import "./card-img.css"

export default function CardImg({ name }) {
    return (
        <div className="img__container">
            <img
                className="card__img"
                src={images.find(img => img.name === name).img}
                alt={name} />
        </div>
    )
}