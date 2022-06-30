import React from "react";
import tv from "./tv.png";
// import data from "./TextImage";

function ComponentTI(props) {
    return (
        <section id="deviceSec">
            <section id="deviceSecText">
                <div>
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>
            </section>
            <section id="deviceSecImage">
                <img src={props.img} alt="watch on tv" />
            </section>
        </section>
    );
}

export default ComponentTI;
