import React from "react";
import Security from "../components/security/Security";

const SecurityPage = ({setPath}) => {
    return (
        <div className="structure">
            <Security setPath={setPath}/>
        </div>
    )
}

export default SecurityPage;