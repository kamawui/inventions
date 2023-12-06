import React from "react";
import History from "../components/history/History";

const HistoryPage = ({setPath}) => {
    return (
        <div className="history">
            <History setPath={setPath}/>
        </div>
    )
}

export default HistoryPage;