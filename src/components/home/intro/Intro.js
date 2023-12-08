import React from "react";
import "./intro.css";
import {useNavigate} from "react-router";

const Intro = ({setPath}) => {
    const navigate = useNavigate();

    return (
        <div className="main white" style={{backgroundImage: "url('/img/intro.jpg')"}}>
            <div className="overlay"></div>
            <h1>Технічний винахід, який змінив світ</h1>
            <button className="call-to-action" onClick={() => {
                setPath("/history");
                navigate("/history");
            }}>Розпочати</button>
        </div>
    )
}

export default Intro;