import React from "react";

const ImageModal = ({active, setActive, url, alt}) => {
    return (
        <div className={`modal-overlay ${active ? "modal-active" : "modal-hidden"}`} onClick={() => setActive(false)}>
            <div className={`image-modal`}>
                <img src={url} alt={alt}/>
            </div>
        </div>
    )
}

export default ImageModal;