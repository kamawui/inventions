import React, {useEffect, useState} from "react";
import "./header.css";
import GitHubLogo from "../../svg/GitHubLogo";
import DiscordLogo from "../../svg/DiscordLogo";
import {Link} from "react-router-dom";

const Header = ({path, setPath}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setIsVisible(!isScrollingDown);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <ul className="navigation">
                <li className={path === "/" ? "active-page" : ""}>
                    <Link to="/" onClick={() => setPath("/")}>Головна</Link>
                </li>
                <li className={path === "/history" ? "active-page" : ""}>
                    <Link to="/history" onClick={() => setPath("/history")}>Історія</Link>
                </li>
                <li className={path === "/structure" ? "active-page" : ""}>
                    <Link to="/structure" onClick={() => setPath("/structure")}>Структура</Link>
                </li>
                <li className={path === "/statistics" ? "active-page" : ""}>
                    <Link to="/statistics" onClick={() => setPath("/statistics")}>Статистика</Link>
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