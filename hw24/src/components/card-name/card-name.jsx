import React from "react";
import "./card-name.css"

export default function CardName({ name }) {
    return (
        <h1 className="card__name">{name}</h1>
    )
}