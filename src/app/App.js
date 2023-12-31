import React, {useEffect, useState} from "react";
import "../styles/styles.css";
import "../styles/backgrounds.css";
import Header from "../components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../components/footer/Footer";
import HistoryPage from "../pages/HistoryPage";
import StructurePage from "../pages/StructurePage";
import StatisticsPage from "../pages/StatisticsPage";
import SecurityPage from "../pages/SecurityPage";
import Navigation from "../components/navigation/Navigation";

const App = () => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() =>  window.scrollTo(0, 0), [path]);

    return (
        <BrowserRouter>
            <div className="app">
                <Navigation path={path} setPath={setPath}/>
                <Header path={path} setPath={setPath}/>
                <Routes>
                    <Route index exact path="/" element={ <HomePage setPath={setPath}/>} />
                    <Route exact path="/history" element={ <HistoryPage setPath={setPath}/> }/>
                    <Route exact path="/structure" element={ <StructurePage setPath={setPath}/> } />
                    <Route exact path="/statistics" element={ <StatisticsPage setPath={setPath} /> } />
                    <Route exact path="/security" element={ <SecurityPage setPath={setPath} /> } />
                </Routes>
                <Footer path={path}/>
            </div>
        </BrowserRouter>
    )
}

export default App;