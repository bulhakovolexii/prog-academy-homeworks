import React from "react";
import "./app.css";
import Card from "../card/card";
import data from "../../data/data";
import Logo from "../logo/logo"

export default function App() {
    const heroes = data.results;
    return (
        <>
            <div className="bg"></div>
            <Logo />
            <div className="wrapper">
                {Array.isArray(heroes) ? heroes.map((hero, index) => {
                    return (
                        <Card key={index} hero={hero} />
                    )
                }) : null}
            </div>
        </>
    )
};