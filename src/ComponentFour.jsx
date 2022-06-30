import React from "react";
import devices from "./devices.png";

function ComponentFour() {
    return (
        <section id="deviceSec">
            <section id="deviceSecText">
                <div>
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on <br />your phone, tablet, laptop, and TV.</p>
                </div>
            </section>
            <section id="deviceSecImage">
                <img src={devices} alt="watch on mobile" />
            </section>
        </section>
    );
}

export default ComponentFour;