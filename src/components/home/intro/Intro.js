import React from "react";
import "./intro.css";

const Intro = () => {
    return (
        <div className="main" style={{backgroundImage: "url('/img/home4.jpg')"}}>
            <div className="overlay"></div>
            <h1>Технічний винахід, який змінив світ</h1>
            <button className="call-to-action">Розпочати</button>
        </div>
    )
}

export default Intro;