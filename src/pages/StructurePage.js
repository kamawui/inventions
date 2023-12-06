import React from "react";
import Structure from "../components/structure/Structure";

const StructurePage = ({setPath}) => {
    return (
        <div className="structure">
            <Structure setPath={setPath}/>
        </div>
    )
}

export default StructurePage;