import React from "react";
import Statistics from "../components/statistics/Statistics";

const StatisticsPage = ({setPath}) => {
    return (
        <div className="structure">
            <Statistics setPath={setPath}/>
        </div>
    )
}

export default StatisticsPage;