import React, {useEffect, useState} from "react";
import "./header.css";
import GitHubLogo from "../../svg/GitHubLogo";
import DiscordLogo from "../../svg/DiscordLogo";
import {Link} from "react-router-dom";

const Header = () => {
    const [path, setPath] = useState(window.location.pathname);

    return (
        <div className="header">
            <ul className="navigation">
                <li className={path === "/" ? "active-page" : ""}>
                    <Link to="/" onClick={() => setPath("/")}>Головна</Link>
                </li>
                <li className={path === "/history" ? "active-page" : ""}>
                    <Link to="/history" onClick={() => setPath("/history")}>Історія</Link>
                </li>
                <li className={path === "/" ? "" : ""}>
                    <Link to="/" onClick={() => setPath("/")}>Структура</Link>
                </li>
                <li className={path === "/" ? "" : ""}>
                    <Link to="/" onClick={() => setPath("/")}>Статистика</Link>
                </li>
                <li className={path === "/" ? "" : ""}>
                    <Link to="/" onClick={() => setPath("/")}>Безпека</Link>
                </li>
            </ul>
            <ul className="links">
                <li><a href="https://github.com/kamawui?tab=repositories" target="_blank">
                    <GitHubLogo />
                </a></li>
                <li><a href="https://discord.com/users/686630494682742861" target="_blank">
                    <DiscordLogo />
                </a></li>
            </ul>
        </div>
    )
}

export default Header;