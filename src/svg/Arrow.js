import React from "react";

const Arrow = ({angle}) => {
    const rotate = `rotate(${angle} 512 512)`

    const setClasses = (angle) => {
        switch (angle) {
            case 0:
                return "arrow-up";
            case 180:
                return "arrow-down";
        }
    }

    const arrowClasses = setClasses(angle);

    return (
        <svg className={arrowClasses} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
            <path fill="white"
                  d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/>

        </svg>

    )
}

export default Arrow;


