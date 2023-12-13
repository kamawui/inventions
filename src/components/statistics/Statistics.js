import React, {useState} from "react";
import {useNavigate} from "react-router";
import ImageModal from "../image-modal/ImageModal";

const Statistics = ({setPath}) => {
    const navigate = useNavigate();
    const [showUsageModal, setShowUsageModal] = useState(false);
    const [showNetworksModal, setShowNetworksModal] = useState(false);
    const [showTrafficModal, setShowTrafficModal] = useState(false);
    const [showWebsiteModal, setShowWebsiteModal] = useState(false);

    return (
        <div className="structure-wrapper">
            <div className="main white border-white" style={{backgroundImage: "url('/img/statistics.jpg')"}}>
                <div className="overlay"></div>
                <h1>Глобальні статистики</h1>
                <button className="call-to-action" onClick={() => {
                    setPath("/security");
                    navigate("/security");
                }}>Наступна</button>
            </div>
            <div className="title white"><h3>Статистика</h3></div>

            <div className="box statistics1">
                <div className="box-container content-right white">
                    <div className="box-stats image-left" onClick={() => setShowUsageModal(true)}>
                        <img src={'/img/statistics/usage.png'} alt="usage"/>
                    </div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="history-text"><h2>Рівень використання Інтернету у всьому світі 2023, за регіонами</h2></div>
                        </div>
                        <p className="box-info">
                            Завдяки прогресу мобільних технологій і безперервній модернізації раніше менш розвинених регіонів кількість користувачів Інтернету в усьому світі за останні роки зросла, досягнувши 5,3 мільярда станом на жовтень 2023 року.
                            У всесвітній мережі Google Chrome все ще займає найбільшу частку ринку інтернет-браузерів, приблизно 62,82 відсотка від загального ринку станом на травень 2023 року, за нею йде Safari від Apple з майже 21 відсотком.
                        </p>
                    </div>
                </div>
                <ImageModal active={showUsageModal} setActive={setShowUsageModal} url={'/img/statistics/usage.png'} alt={"usage"}/>
            </div>

            <div className="box statistics2">
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="history-text"><h2>Світовий рейтинг соціальних мереж за кількістю користувачів 2023</h2></div>
                        </div>
                        <p className="box-info">
                            Лідер ринку Facebook був першою соціальною мережею, яка перевищила один мільярд зареєстрованих облікових записів і наразі має понад три мільярди активних користувачів щомісяця. Meta Platforms володіє чотирма найбільшими платформами соціальних мереж, кожна з яких має понад один мільярд активних користувачів щомісяця: Facebook (основна платформа), WhatsApp, Facebook Messenger та Instagram.
                            У другому кварталі 2023 року Facebook повідомила про понад 3,8 мільярда користувачів основного продукту Family.                        </p>
                    </div>
                    <div className="box-stats image-right" onClick={() => setShowNetworksModal(true)}>
                        <img src={'/img/statistics/popular-networks.png'} alt="popular-networks"/>
                    </div>
                </div>
                <ImageModal active={showNetworksModal} setActive={setShowNetworksModal} url={'/img/statistics/popular-networks.png'} alt={"popular-networks"}/>
            </div>

            <div className="box statistics3">
                <div className="box-container content-right white">
                    <div className="box-stats image-left" onClick={() => setShowTrafficModal(true)}>
                        <img src={'/img/statistics/best-traffic.png'} alt="best-traffic"/>
                    </div>
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="history-text"><h2>Країни з найвищою середньою швидкістю мобільного Інтернету станом на квітень 2023 року</h2></div>
                        </div>
                        <p className="box-info">
                            Станом на квітень 2023 року Катар мав найшвидше середнє мобільне інтернет-з’єднання у світі, майже 190 Мбіт/с.
                            Далі слідують Об’єднані Арабські Емірати (ОАЕ) і Макао, у кожній із яких середня швидкість перевищує 170 Мбіт/с.
                        </p>
                    </div>
                </div>
                <ImageModal active={showTrafficModal} setActive={setShowTrafficModal} url={'/img/statistics/best-traffic.png'} alt={"best-traffic"}/>
            </div>

            <div className="box statistics4">
                <div className="box-container content-left white">
                    <div className="box-content">
                        <div className="box-header-group">
                            <div className="history-text"><h2>Світовий рейтинг соціальних мереж за кількістю користувачів 2023</h2></div>
                        </div>
                        <p className="box-info">
                            У період з вересня по листопад 2022 року Google.com утримував лідируючу позицію як найпопулярніший веб-сайт у світі з 88,4 мільярдами відвідувань у середньому на місяць. Онлайн-платформа утримує перше місце як найпопулярніший веб-сайт з червня 2010 року, коли вона випередила Yahoo, зайнявши перше місце.
                            YouTube, який займає друге місце, отримав понад 74,8 мільярда відвідувань на місяць за виміряний період.                       </p>
                    </div>
                    <div className="box-stats image-right" onClick={() => setShowWebsiteModal(true)}>
                        <img src={'/img/statistics/popular-websites.png'} alt="popular-websites"/>
                    </div>
                </div>
                <ImageModal active={showWebsiteModal} setActive={setShowWebsiteModal} url={'/img/statistics/popular-websites.png'} alt={"popular-websites"}/>
            </div>
        </div>
    )
}

export default Statistics;