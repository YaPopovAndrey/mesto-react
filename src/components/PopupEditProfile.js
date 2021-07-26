import React from "react"
import PopupWithForm from './PopupWithForm.js'

function PopupEditProfile(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="edit-profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
        >
            <input type="text" name="name" id="nameInput" value="Жак-Ив Кусто" placeholder="Имя"
                className="popup__input popup__input_name" minlength="2" maxlength="40" required />
            <span className="nameInput-error popup__error"></span>
            <input type="text" name="about" id="jobInput" value="Исследователь океана"
                placeholder="Вид деятельности" className="popup__input popup__input_job" minlength="2"
                maxlength="200" required />
            <span className="jobInput-error popup__error"></span>
        </PopupWithForm>
    );
}

export default PopupEditProfile;