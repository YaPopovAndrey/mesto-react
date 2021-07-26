function ImagePopup() {
    return (
        <div className="popup popup_img">
            <div className="popup__box">
                <figure className="popup__container">
                    <img src="#" alt="Место" className="popup__image"/>
                    <figcaption className="popup__caption"></figcaption>
                </figure>
                <button type="button" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_img"></button>
            </div>
        </div>
    );
}

export default ImagePopup;