import React from "react";
import Intro from "../components/home/intro/Intro";
import Description from "../components/home/description/Description";
import Bio from "../components/home/bio/Bio";
import Technologies from "../components/home/technologies/Technologies";
import Essay from "../components/home/essay/Essay";

const HomePage = ({setPath}) => {
    return (
        <div className="home">
            <Intro setPath={setPath}/>
            <Description />
            <Bio />
            <Technologies />
            <Essay />
        </div>
    )
}

export default HomePage;