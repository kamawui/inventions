import React, {useState} from "react";
import "./technologies.css";
import ReactLogo from "../../../svg/ReactLogo";
import HTMLLogo from "../../../svg/HTMLLogo";
import CSSLogo from "../../../svg/CSSLogo";
import JSLogo from "../../../svg/JSLogo";
import Arrow from "../../../svg/Arrow";

const Technologies = () => {
    const [HTMLDescription, setHTMLDescription] = useState(false);
    const [CSSDescription, setCSSDescription] = useState(false);
    const [JSDescription, setJSDescription] = useState(false);
    const [ReactDescription, setReactDescription] = useState(false);


    return (
        <div className="technologies">
            <div className="technologies-header border-black left black"><h2>Використані технології</h2></div>
            <div className="technologies-content">
                <div className="technology-item">
                    <div className="item-card border-black">
                        <HTMLLogo />
                    </div>
                    <div className="item-description">
                        <span>HTML</span><br/>
                        <div className={`${HTMLDescription ? "active" : "hidden"}`}>
                            Мова розмітки для створення та відображення веб-сторінок.
                        </div>
                    </div>
                    <div className="item-card-end">
                        <button onClick={() => setHTMLDescription(!HTMLDescription)}><Arrow angle={HTMLDescription ? 0 : 180}/></button>
                    </div>
                </div>
                <div className="technology-item">
                    <div className="item-card border-black">
                        <CSSLogo />
                    </div>
                    <div className="item-description">
                        <span>CSS</span><br/>
                        <div className={`${CSSDescription ? "active" : "hidden"}`}>
                            Мова стилізації, що використовується для оформлення та визначення зовнішнього вигляду веб-сторінок.
                        </div>
                    </div>
                    <div className="item-card-end">
                        <button onClick={() => setCSSDescription(!CSSDescription)}><Arrow angle={CSSDescription ? 0 : 180}/></button>
                    </div>
                </div>
                <div className="technology-item">
                    <div className="item-card border-black">
                        <JSLogo />
                    </div>
                    <div className="item-description">
                        <span>JavaScript</span><br/>
                        <div className={`${JSDescription ? "active" : "hidden"}`}>
                            Мова програмування, яка використовується для реалізації динамічної взаємодії на веб-сторінках,
                            додавання функціональності та взаємодії з користувачем.
                        </div>
                    </div>
                    <div className="item-card-end">
                        <button onClick={() => setJSDescription(!JSDescription)}><Arrow angle={JSDescription ? 0 : 180}/></button>
                    </div>
                </div>
                <div className="technology-item">
                    <div className="item-card border-black">
                        <ReactLogo />
                    </div>
                    <div className="item-description">
                        <span>React</span><br/>
                        <div className={`${ReactDescription ? "active" : "hidden"}`}>
                            Бібліотека JavaScript для розробки інтерфейсів користувача,
                            яка дозволяє створювати ефективні та декларативні компоненти для побудови модерних веб-додатків.
                        </div>
                    </div>
                    <div className="item-card-end">
                        <button onClick={() => setReactDescription(!ReactDescription)}><Arrow angle={ReactDescription ? 0 : 180}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;