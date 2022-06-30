import React from "react";
import Input from "./InputSubscription";

function Header() {
    return (
        <header>
            <section id="headerSec">
                <h1 className="heading">NETFLIX</h1>
                <p id="primaryP">Unlimited movies, TV <br />shows and more.</p>
                <p id="secondaryP">Watch anywhere. Cancel anytime.</p>
                <Input></Input>
                <div id="headingButtonSec">
                    <select name="lang" id="lang">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    <button id="signin">Sign In</button>
                </div>
            </section>
        </header>
    );
}

export default Header;
