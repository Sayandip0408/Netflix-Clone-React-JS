import React, { Fragment } from "react";


function Input() {
    return (
        <Fragment>
            <p id="tertiaryP">Ready to watch? Enter your email to create or restart your membership.</p>
            <section id="input">
                <input type="text" id="inputBox" name="inoutbox" placeholder="Email address"></input>
                <button id="getStarted">Get Started <i class="fas fa-chevron-right"></i></button>
            </section>
        </Fragment>
    );
}

export default Input;

