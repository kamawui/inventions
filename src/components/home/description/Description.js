import React from "react";
import "./description.css";
import Topic from "../../../svg/Topic";
import Purpose from "../../../svg/Purpose";
import Content from "../../../svg/Content";

const Description = () => {
    return (
        <div className="description white">
            <div className="header-container"><h3>Про проект</h3></div>
            <div className="description-container">
                <div className="description-item main-1st">
                    <div className="description-icon main-1st"> <Topic /> </div>
                    <h4>Тема</h4>
                    <p>Технічний винахід, який змінив світ: Інтернет. Його розвиток, вплив та значення у нашому житті.</p>
                </div>
                <div className="description-item main-2nd">
                    <div className="description-icon main-2nd"> <Purpose /> </div>
                    <h4>Мета</h4>
                    <p>Надання інтерфейсу для користувачів,
                        щоб вони змогли ознайомитися із значущими аспектами Інтернету та зрозуміти те,
                        як Інтернет вплинув на сучасне суспільство та які фактори його розвитку варто враховувати,
                        за допомогою інфографіки</p>
                </div>
                <div className="description-item main-3d">
                    <div className="description-icon main-3d"> <Content/> </div>
                    <h4>Контент</h4>
                    <p>Проект спрямований на надання користувачам доступу до інформації з історії, структури,
                        статистики та аспектів безпеки Інтернету через зручний та візуально привабливий інтерфейс.</p>
                </div>
            </div>

        </div>
    )
}

export default Description;