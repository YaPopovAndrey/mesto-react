import React from "react"
import PopupWithForm from './PopupWithForm.js'

function PopupAddPlace(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="popup_add"
            title="Новое место"
            buttonText="Создать"
        >
            <input type="text" name="name" id="titleInput" placeholder="Название"
                className="popup__input popup__input_title" minLength="2" maxLength="30" required />
            <span className="titleInput-error popup__error"></span>
            <input type="url" name="link" id="urlInput" placeholder="Ссылка на картинку"
                className="popup__input popup__input_link" required />
            <span className="urlInput-error popup__error"></span>
        </PopupWithForm>
    );
}

export default PopupAddPlace;