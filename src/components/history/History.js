import React, {useState} from "react";
import {useNavigate} from "react-router";

const History = ({setPath}) => {
    const navigate = useNavigate();

    return (
        <div className="history-wrapper">
            <div className="main white border-white" style={{backgroundImage: "url('/img/history.jpg')"}}>
                <div className="overlay"></div>
                <h1>Від ARPANET до Сучасності</h1>
                <button className="call-to-action" onClick={() => {
                    setPath("/structure");
                    navigate("/structure");
                }}>Наступна</button>
            </div>
            <div className="title white"><h3>Історія</h3></div>

            <div className="box history1">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/history/robot.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">1</div>
                            <div className="box-header history-text">
                                <h2>Зародження Інтернету</h2>
                            </div>
                        </div>
                        <p className="box-info">
                            ARPANET, запущений у 1969 році, є першим військовим проектом для обміну інформацією.
                            Відомий своєю стійкістю до збоїв, ARPANET був основою для створення сучасного Інтернету.
                            Вже 1972 році був відправлений перший електронний лист, що выдзначило народження електронної пошти.
                        </p>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">2</div>
                            <div className="box-header history-text"><h2>Початок WWW</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>У 1989 році Тім Бернерс-Лі розробив систему WWW, що визначила принципи роботи сучасного Інтернету.</li>
                            <li>Запуск першого веб-браузера, Mosaic, у 1993 році відкрив шлях для глобального розповсюдження WWW.</li>
                            <li>Поява перших веб-сайтів, таких як "CERN", внесла вагомий внесок у розвиток онлайн-інформаційного простору.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/history/internet.jpg')"}}></div>
                </div>
            </div>

            <div className="box history2">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/history/interface.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">3</div>
                            <div className="box-header history-text"><h2>Близька до Кожного</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>Винайдення графічних інтерфейсів, наприклад, віконної системи Macintosh у 1984 році, робить використання комп'ютерів більш доступним для широкої публіки.</li>
                            <li>Розширення можливостей спілкування через пошту, чати та форуми зробило Інтернет платформою для глобальної спільноти.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">4</div>
                            <div className="box-header history-text"><h2>Бум електронної комерції</h2></div>
                        </div>
                        <p className="box-info">
                            Поява перших онлайн-магазинів, таких як Amazon та eBay, змінила спосіб, яким люди купують та продають товари, а
                            такі електронні платіжні системи, зокрема PayPal, роблять онлайн-транзакції швидшими та безпечнішими.
                        </p>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/history/bank.jpg')"}}></div>
                </div>
            </div>

            <div className="box history3">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/history/media.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">5</div>
                            <div className="box-header history-text"><h2>Зміни у Засобах Зв'язку</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>Виникнення соціальних мереж, таких як Facebook та Twitter, перетворило спілкування та обмін інформацією.</li>
                            <li>Перехід від простих текстових чатів до сучасних месенджерів, таких як WhatsApp та Telegram, полегшив комунікацію.</li>
                            <li>Розвиток відеозв'язку та стрімінгових платформ розширює можливості віртуального спілкування.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">6</div>
                            <div className="box-header history-text"><h2>Мобільний Інтернет</h2></div>
                        </div>
                        <ul>
                            <li>Поява перших смартфонів та розвиток мобільних технологій відкрили нові можливості для доступу до Інтернету.</li>
                            <li>Створення мобільних додатків дозволяє користувачам використовувати різноманітні сервіси на своїх пристроях.</li>
                            <li>Розширення мобільного Інтернету відкриває шлях до розвитку "інтернету речей" та забезпечення підключення різних пристроїв.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/history/mobile.jpg')"}}></div>
                </div>
            </div>

            <div className="box history4">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/history/danger.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">7</div>
                            <div className="box-header history-text"><h2>Безпека та Кіберзагрози</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>Поява перших вірусів та зловмисних програм поклала початок кіберзахисту та розробці антивірусних технологій.</li>
                            <li>Зростання кількості кібератак підкреслює важливість безпеки в мережі.</li>
                            <li>Розвиток кіберзахисту стає невід'ємною частиною сучасного Інтернету.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">8</div>
                            <div className="box-header history-text"><h2>Майбутнє Інтернету</h2></div>
                        </div>
                        <ul>
                            <li>Розвиток швидкісного Інтернету, зокрема технології 5G, прискорює передачу даних та розширює можливості мережі.</li>
                            <li>Перспективи використання віртуальної та розширеної реальності в інтерактивних інтернет-середовищах.</li>
                            <li>Роль штучного інтелекту у подальшому розвитку Інтернету та вплив на різні сфери життя.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/history/future.jpg')"}}></div>
                </div>
            </div>

        </div>
    )
}

export default History;