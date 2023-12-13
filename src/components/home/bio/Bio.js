import React from "react";
import "./bio.css";

const Bio = () => {
   return (
       <div className="bio">
            <div className="bio-content white">
                <div className="bio-header border-white"><h2>Про автора</h2></div>
                <div className="bio-item"><h4>Автор: </h4> <span>Бурлаченко Даніїл Андрійович</span></div>
                <div className="bio-item"><h4>Клас: </h4> <span>11</span></div>
                <div className="bio-item"><h4>Школа: </h4> <span>Вижницький опорний ліцей імені Юрія Федьковича</span></div>
                <div className="bio-item"><h4>Вчитель: </h4> <span>Ізбінський Олександр Дмитрович</span></div>
            </div>
       </div>
   )
}

export default Bio;