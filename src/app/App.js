import React from "react";
import "../styles/styles.css";
import Header from "../components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Routes>
                    <Route index exact path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

//rawpixel: <a href="https://ru.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_13463111.htm#query=internet&position=9&from_view=search&track=sph&uuid=c4da4b32-90aa-4ca9-8730-5385ac355767">Изображение от rawpixel.com</a> на Freepik

export default App;