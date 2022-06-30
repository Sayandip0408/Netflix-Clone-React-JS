import React from "react";
import tv from "./tv.png";

function ComponentTwo() {
    return (
        <section id="deviceSec">
            <section id="deviceSecText">
                <div>
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, <br />Chromecast, Apple TV, Blu-ray players and <br />more.</p>
                </div>
            </section>
            <section id="deviceSecImage">
                <img src={tv} alt="watch on tv" />
            </section>
        </section>
    );
}

export default ComponentTwo;
