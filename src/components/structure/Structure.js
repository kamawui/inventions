import React from "react";
import {useNavigate} from "react-router";

const Structure = ({setPath}) => {
    const navigate = useNavigate();

    return (
        <div className="structure-wrapper">
            <div className="main white border-white" style={{backgroundImage: "url('/img/home1.jpg')"}}>
                <div className="overlay"></div>
                <h1>Структура та іерархія Інтернету</h1>
                <button className="call-to-action" onClick={() => {
                    setPath("/structure");
                    navigate("/structure");
                }}>Наступна</button>
            </div>
            <div className="title white"><h3>Структура</h3></div>

            <div className="box structure1">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/structure/user.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">1</div>
                            <div className="box-header history-text"><h2>Рівень 1: Користувач</h2></div>
                        </div>
                        <p className="box-info">
                            Людина, яка використовує Інтернет для доступу до різноманітних ресурсів.
                        </p>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">2</div>
                            <div className="box-header history-text"><h2>Рівень 2: Веб-браузер</h2></div>
                        </div>
                        <p className="box-info">
                            Програмне забезпечення, яке призначене для перегляду та навігації в Інтернеті.
                            Воно дозволяє користувачеві відкривати веб-сайти, переглядати веб-сторінки, взаємодіяти з вмістом та використовувати різноманітні веб-додатки.                        </p>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/structure/browser.jpg')"}}></div>
                </div>
            </div>

            <div className="box structure2">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/structure/dns.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">3</div>
                            <div className="box-header history-text"><h2>Рівень 3: DNS Сервер</h2></div>
                        </div>
                        <p className="box-info">
                            Сервер, який виконує функцію перетворення доменних імен (наприклад, www.example.com) в IP-адреси, що є необхідними для знаходження конкретного ресурсу в Інтернеті.
                            DNS є ключовим компонентом архітектури Інтернету, оскільки забезпечує людям зручний спосіб навігації в Інтернеті, використовуючи легкозапам'ятовувані доменні імена.
                        </p>
                        <ul className="box-list">
                            <li>DNS може бути розділений на логічні доменні зони, кожна з яких відповідає певному ієрархічному рівню домену (наприклад, верхній рівень домену - .com, .org, .net тощо).</li>
                            <li>DNS Сервер може зберігати результати попередніх запитів в кеші, щоб прискорити відповідь на подібні запитання та зменшити навантаження на мережу.</li>
                            <li>DNS використовує UDP (User Datagram Protocol) для передачі запитів та отримання відповідей.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="box structure3">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/structure/provider.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">4</div>
                            <div className="box-header history-text">
                                <h2>Рівень 4: Інтернет-Провайдер</h2>
                            </div>
                        </div>
                        <p className="box-info">
                            Організація або компанія, яка надає доступ користувачам до Інтернету через різноманітні технології, такі як DSL, кабельний інтернет, оптичний волоконний зв'язок, супутниковий зв'язок, а також мобільні та бездротові технології.
                        </p>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">5</div>
                            <div className="box-header history-text"><h2>Рівень 5: Маршрутизатор</h2></div>
                        </div>
                        <p className="box-info">
                            Маршрутизатор (роутер) є ключовим мережевим пристроєм, який використовується для направлення даних між різними мережами.
                            Він оптимізує шляхи передачі даних та дозволяє різним частинам мережі спілкуватися між собою.
                            Маршрутизатор має різні фізичні та логічні інтерфейси, такі як Ethernet, WAN-порти, а також може підтримувати бездротові технології.
                        </p>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/structure/router.jpg')"}}></div>
                </div>
            </div>

            <div className="box structure4">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/structure/core.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">6</div>
                            <div className="box-header history-text">
                                <h2>Рівень 6: Ядро Інтернету</h2>
                            </div>
                        </div>
                        <p className="box-info">
                            Ядро Інтернету є центральною частиною глобальної мережі, що включає велику кількість високопродуктивних маршрутизаторів та комутаторів.
                            Це мережеве ядро забезпечує головну інфраструктуру для пересилання даних по всьому Інтернету.
                        </p>
                        <ul className="box-list">
                            <li>Відповідає за маршрутизацію пакетів даних між різними мережами. Воно визначає найефективніший шлях для передачі даних від джерела до призначення.</li>
                            <li>Центральні комутатори у ядрі Інтернету виконують функцію швидкого і ефективного пересилання даних, забезпечуючи низьку затримку та високий рівень пропускної спроможності.</li>
                            <li>Сприяє співпраці різних мереж і служить як з'єднання між різними провайдерами та регіональними мережами.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">7</div>
                            <div className="box-header history-text"><h2>Рівень 7: Сервери Змісту</h2></div>
                        </div>
                        <p className="box-info">
                            великі комп'ютерні системи або мережі серверів, що забезпечують зберігання, управління та надання доступу до різноманітного вмісту в Інтернеті, такого як веб-сайти, мультимедійні файли, додатки та інше.
                        </p>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/structure/server.jpg')"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Structure;