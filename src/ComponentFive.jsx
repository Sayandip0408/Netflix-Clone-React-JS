import React from "react";
import img from "./img.png";

function ComponentFive() {
    return (
        <section id="deviceSec">
            <section id="deviceSecImage">
                <img src={img} alt="watch on mobile" />
            </section>
            <section id="deviceSecText">
                <div>
                    <h1>Create profiles for <br />children.</h1>
                    <p>Send children on adventures with their <br />favourite characters in a space made just for <br />them—free with your membership.</p>
                </div>
            </section>
        </section>
    );
}

export default ComponentFive;