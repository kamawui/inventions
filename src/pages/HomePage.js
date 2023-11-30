import React from "react";
import Intro from "../components/home/intro/Intro";
import Description from "../components/home/description/Description";
import Bio from "../components/home/bio/Bio";

const HomePage = () => {
    return (
        <div className="home">
            <Intro />
            <Description />
            <Bio />
        </div>
    )
}

export default HomePage;