import React from "react";
import "./bio.css";

const Bio = () => {
   return (
       <div className="bio">
            <div className="bio-content white">
                <div className="bio-header border-white"><h2>Про автора</h2></div>
                <div className="bio-item"><h4>Автор: </h4> Бурлаченко Даніїл Андрійович</div>
                <div className="bio-item"><h4>Клас: </h4> 11</div>
                <div className="bio-item"><h4>Школа: </h4> Вижницький опорний ліцей імені Юрія Федьковича</div>
                <div className="bio-item"><h4>Вчитель: </h4> Ізбінський Олександр Дмитрович</div>
            </div>
       </div>
   )
}

export default Bio;