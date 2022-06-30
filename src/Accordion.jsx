import React from "react";
import { show1, show2, show3, show4, show5, show6 } from "./script";

function Accordion() {
    return (
        <section id="accord">
            <button class="accordion" onClick={show1}>What is Netflix?</button>
            <div className="panel" id="p1">
                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br /><br />You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
            </div>
            <button className="accordion" onClick={show2}>How much does Netflix cost?</button>
            <div className="panel" id="p2">
                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
            </div>
            <button className="accordion" onClick={show3}>Where can I watch?</button>
            <div className="panel" id="p3">
                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
            <button className="accordion" onClick={show4}>How do I cancel?</button>
            <div className="panel" id="p4">
                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            </div>
            <button className="accordion" onClick={show5}>What I can watch on Netflix?</button>
            <div className="panel" id="p5">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>
            <button className="accordion" onClick={show6}>Is Netflix good for kids?</button>
            <div className="panel" id="p6">
                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br /><br />Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
        </section>
    );
}

export default Accordion;


