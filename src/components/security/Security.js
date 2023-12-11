import React from "react";
import {useNavigate} from "react-router";

const Security = ({setPath}) => {
    const navigate = useNavigate();

    return (
        <div className="structure-wrapper">
            <div className="main white border-white" style={{backgroundImage: "url('/img/security.jpg')"}}>
                <div className="overlay"></div>
                <h1>Безпека в Інтернеті</h1>
                <button className="call-to-action" onClick={() => {
                    setPath("/");
                    navigate("/");
                }}>Головна</button>
            </div>
            <div className="title white"><h3>Безпека</h3></div>

            <div className="box security1">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/security/password.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">1</div>
                            <div className="box-header history-text">
                                <h2>Сильні паролі</h2>
                            </div>
                        </div>
                        <ul className="box-list">
                            <li>Використовуйте унікальні та складні паролі для кожного облікового запису.
                                Пароль повинен містити комбінацію букв верхнього та нижнього регістрів, цифр і символів.</li>
                            <li>Міняйте паролі регулярно.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">2</div>
                            <div className="box-header history-text"><h2>Двоетапна аутентифікація</h2></div>
                        </div>
                        <p className="box-info">
                            Двоетапна аутентифікація (2FA) - це метод безпеки, який вимагає від користувача подвійної перевірки його ідентичності під час входу в обліковий запис або систему.
                            Замість того, щоб використовувати лише пароль, користувач також повинен представити додатковий елемент, який може бути єдиноразовим кодом, отриманим на мобільний телефон або інший пристрій.
                        </p>
                        <ul className="box-list">
                            <li>Включіть двоетапну аутентифікацію для додаткового рівня захисту облікових записів.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/security/verification.jpg')"}}></div>
                </div>
            </div>

            <div className="box security2">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/security/updating.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">3</div>
                            <div className="box-header history-text">
                                <h2>Оновлення програмного забезпечення</h2>
                            </div>
                        </div>
                        <ul className="box-list">
                            <li>Регулярно оновлюйте операційні системи, антивіруси та інші програми для усунення вразливостей.
                                Актуальна версія програмного забезпечення надає захист від найновіших загроз.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">4</div>
                            <div className="box-header history-text"><h2>Уважність при відправці особистої інформації</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>Уникайте публікації особистої інформації на громадських ресурсах.</li>
                            <li>Будьте обережні при взаємодії з невідомими особами в мережі.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/security/data.jpg')"}}></div>
                </div>
            </div>

            <div className="box security3">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/security/email.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">5</div>
                            <div className="box-header history-text">
                                <h2>Безпека електронної пошти</h2>
                            </div>
                        </div>
                        <ul className="box-list">
                            <li>Уникайте відкривання сумнівних електронних листів та вкладень.</li>
                            <li>Використовуйте електронні підписи для перевірки відправників.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">6</div>
                            <div className="box-header history-text"><h2>Резервне копіювання даних</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>Регулярно створюйте резервні копії важливих даних для уникнення втрати інформації внаслідок несподіваних ситуацій.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/security/duplicating.jpg')"}}></div>
                </div>
            </div>

            <div className="box security4">
                <div className="box-container content-right white">
                    <div className="box-image image-left" style={{backgroundImage: "url('/img/security/phishing.jpg')"}}></div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">7</div>
                            <div className="box-header history-text">
                                <h2>Попередження про фішинг</h2>
                            </div>
                        </div>
                        <p className="box-info">
                            Фішинг (англ. "phishing") - це вид кібератак, спрямований на отримання конфіденційної інформації, такої як логіни, паролі та інші особисті дані, шляхом використання соціальної інженерії.
                            Атаки фішингу часто використовують підроблені електронні листи, веб-сайти або повідомлення, які виглядають як легітимні відомі джерела, щоб обманом отримати інформацію від жертв.
                        </p>
                        <ul className="box-list">
                            <li>Навчіться розпізнавати фішингові атаки та уникайте відправки особистої інформації через сумнівні посилання.</li>
                        </ul>
                    </div>
                </div>
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="box-header-id">8</div>
                            <div className="box-header history-text"><h2>Антивірус та антишпигунське ПЗ</h2></div>
                        </div>
                        <ul className="box-list">
                            <li>Встановлюйте та оновлюйте програми антивірусного та антишпигунського захисту для захисту від вірусів, троянців та інших шкідливих програм.</li>
                        </ul>
                    </div>
                    <div className="box-image image-right" style={{backgroundImage: "url('/img/security/antivirus.jpg')"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Security;