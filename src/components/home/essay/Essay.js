import React from "react";
import "./essay.css";


const Essay = () => {
    return (
        <div className="essay">
            <div className="essay-content">
                <div className="technologies-header border-black black"><h2>Опис</h2></div>
                <div className="essay-header"><h4><span>Назва: </span>Технічний винахід, який змінив світ</h4></div>
                <div className="essay-header"><h4><span>Основні ідеї: </span>Проєкт є інфографічним висвітленням ключових аспектів розвитку та впливу Інтернету на сучасний світ. Завдання проекту полягало в тому, щоб створити вражаючий та пізнавальний веб-сайт, що відображає історію, структуру, статистику та аспекти безпеки Інтернету.</h4></div>
                <div className="essay-header"><h4><span>Основна мета проекту: </span>Створити інтерактивний та привабливий інфографічний веб-сайт, який дозволяє користувачам дізнатися цікаві факті та корисну інформацію щодо еволюції Інтернету, його роботи, використанні в сьогоденні, правил поведінки в ньому. Робота має демонструвати вміння використовувати сучасні технології для розробки інтерактивних та змістовних веб-проектів.</h4></div>
            </div>
            <div className="essay-content">
                <div className="technologies-header right border-black black"><h2>Програми та інструменти</h2></div>
                <div className="essay-header"><h4><span>Мова програмування: </span>JavaScript</h4></div>
                <div className="essay-header">
                    <h4><span>Інструмент розробки: </span>
                        <a href="https://www.jetbrains.com/webstorm/">WebStorm (v. 11.0.6)</a>
                    </h4>
                </div>
                <div className="essay-header">
                    <h4><span>Бібліотеки та залежності: </span>
                        <a href="https://react.dev/">React (v. 18.2.0), </a>
                        <a href="https://reactrouter.com/en/main">React Router (v. 6.20.0), </a>
                        <a href="https://ru.legacy.reactjs.org/docs/react-dom.html">React Dom (v. 18.2.0)</a>
                    </h4>
                </div>
            </div>
            <div className="essay-content">
                <div className="technologies-header border-black black"><h2>Технічні аспекти</h2></div>
                <div className="essay-header"><h4><span>React та компонентний підхід: </span>Використання React дозволило розбити сайт на компоненти, що полегшує розробку, тестування та підтримку коду.</h4></div>
                <div className="essay-header"><h4><span>React Router: </span>Для забезпечення навігації між сторінками використано React Router, що забезпечує швидкий та зручний перехід між розділами сайту.</h4></div>
                <div className="essay-header"><h4><span>GitHub: </span>Керування версіями реалізована за допомогою  веб-сервісу
                    <a href="https://github.com/kamawui/inventions">GitHub</a>. Зміни в коді відстежуються та об'єднуються в системі контролю версій.</h4></div>
                <div className="essay-header"><h4><span>Деплой за допомогою Vercel: </span>Для публікації проекту в Інтернеті використано сервіс Vercel, що дозволяє швидко та зручно розгортати веб-додатки.</h4></div>
                <div className="essay-header"><h4><span>Стилі: </span>Для створення стилів елементів сайту використано CSS</h4></div>
            </div>
        </div>
    )
}

export default Essay;