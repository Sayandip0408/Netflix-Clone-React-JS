import React from "react";
import mobile from "./mobile.jpg";

function ComponentThree() {
    return (
        <section id="deviceSec">
            <section id="deviceSecImage">
                <img src={mobile} alt="watch on mobile" />
            </section>
            <section id="deviceSecText">
                <div>
                    <h1>Download your shows <br />to watch offline.</h1>
                    <p>Save your favourites easily and always have <br />something to watch.</p>
                </div>
            </section>
        </section>
    );
}

export default ComponentThree;