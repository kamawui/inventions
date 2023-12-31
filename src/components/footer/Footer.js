import React from "react";
import "./footer.css";

const Footer = ({path}) => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-content white">
                    <div className="footer-left footer-content-item">
                        <div className="footer-header"><h4>Використані ресурси: </h4></div>
                        <div className="resource">
                            <span>Зображення: </span>
                            <a href="https://unsplash.com/">Unsplash</a>
                            <a href="https://ru.freepik.com/?log-in=google">Freepik</a>
                        </div>
                        <div className="resource">
                            <span>Іконки: </span>
                            <a href="https://icon-sets.iconify.design/">Iconify</a>
                        </div>
                        <div className="resource">
                            <span>Офіційна статистика: </span>
                            <a href="https://www.statista.com/">Statista</a>
                        </div>
                        <div className="resource">
                            <span>Деяка інформація взята з: </span>
                            <a href="https://www.wikipedia.com.ua/">Wikipedia</a>
                            <a href="https://e-server.com.ua/uk/poradi/istorija-rozvitku-internetu">EServer</a>
                        </div>
                    </div>
                    <div className="footer-right footer-content-item">
                        <div className="footer-header"><h4>Автор: </h4></div>
                        <div className="link">
                            <span>Я в </span>
                            <a href="https://github.com/kamawui?tab=repositories">GitHub</a>
                            <a href="https://discord.com/users/686630494682742861">Discord</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;