import React from "react"
import PopupWithForm from './PopupWithForm.js'

function PopupEditAvatar(props) {
    return (
        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="update-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
        >
            <input type="url" name="avatar" id="updateUrlInput" placeholder="Ссылка на картинку"
                        className="popup__input popup__input_update-avatar" required/>
                    <span className="updateUrlInput-error popup__error"></span>
        </PopupWithForm>        
    );
}

export default PopupEditAvatar;