import React from "react";
import "./header.css";
import GitHubLogo from "../../svg/GitHubLogo";
import DiscordLogo from "../../svg/DiscordLogo";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <ul className="navigation">
                <li className="active-page"><Link to="/">Головна</Link></li>
                <li><Link to="/">Історія</Link></li>
                <li><Link to="/">Структура</Link></li>
                <li><Link to="/">Статистика</Link></li>
                <li><Link to="/">Безпека</Link></li>
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