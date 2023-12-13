import React, {useEffect, useState} from "react";
import "./navigation.css";
import {Link} from "react-router-dom";

const Navigation = ({path, setPath}) => {
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
        <div className={`navigation-wrapper ${isVisible ? 'visible' : 'hidden'}`}>
            <ul className="navigation-content">
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
                <li className={path === "/security" ? "active-page" : ""}>
                    <Link to="/security" onClick={() => setPath("/security")}>Безпека</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;