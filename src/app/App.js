import React, {useEffect, useState} from "react";
import "../styles/styles.css";
import Header from "../components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../components/footer/Footer";
import HistoryPage from "../pages/HistoryPage";
import Structure from "../components/structure/Structure";
import StructurePage from "../pages/StructurePage";

const App = () => {
    const [path, setPath] = useState(window.location.pathname);

    return (
        <BrowserRouter>
            <div className="app">
                <Header path={path} setPath={setPath}/>
                <Routes>
                    <Route index exact path="/" element={ <HomePage setPath={setPath}/>} />
                    <Route exact path="/history" element={ <HistoryPage setPath={setPath}/> }/>
                    <Route exact path="/structure" element={ <StructurePage setPath={setPath}/> }/>
                </Routes>
                <Footer path={path}/>
            </div>
        </BrowserRouter>
    )
}

export default App;