import React from "react";
import img from "./img.png";

function ComponentIT(props) {
    return (
        <section id="deviceSec">
            <section id="deviceSecImage">
                <img src={props.img} alt="watch on mobile" />
            </section>
            <section id="deviceSecText">
                <div>
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>
            </section>
        </section>
    );
}

export default ComponentIT;