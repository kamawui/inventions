import React from "react";
import Intro from "../components/home/intro/Intro";
import Description from "../components/home/description/Description";
import Bio from "../components/home/bio/Bio";
import Technologies from "../components/home/technologies/Technologies";

const HomePage = ({setPath}) => {
    return (
        <div className="home">
            <Intro setPath={setPath}/>
            <Description />
            <Bio />
            <Technologies />
        </div>
    )
}

export default HomePage;