import avatar from '../images/avatar.jpg'

function Main() {
    return (
        <main className="content">
        <section className="profile root__section">
            <div className="profile__image">
                <img src={avatar} alt="Аватарка" className="profile__avatar"/>
            </div>
            <div className="profile__info">
                <div className="profile__name-section">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" aria-label="Редактировать профиль" className="profile__edit-button"></button>
                </div>
                <p className="profile__profession">Исследователь океана</p>
            </div>
            <button type="button" aria-label="Добавить новое место" className="profile__add-button"></button>
        </section>

        <section className="elements">
            <ul className="elements__content root__section"></ul>
        </section>

        <template className="template">
            <li className="template__card card">
                <div className="elements__element">
                    <button type="button" className="elements__delete"></button>
                    <img src="#" alt="Домбай" className="elements__image"/>
                    <div className="elements__title">
                        <h2 className="elements__caption"></h2>
                        <div className="elements__like-box">
                            <button type="button" className="elements__like"></button>
                            <span className="elements__like-count">0</span>
                        </div>
                    </div>
                </div>
            </li>
        </template>

        <div className="popup popup_update-avatar">
            <div className="popup__content popup__update-avatar">
                <form action="#" name="avatarForm" className="popup__form popup__form_update-avatar" novalidate>
                    <h2 className="popup__title popup__title_update-avatar">Обновить аватар</h2>
                    <input type="url" name="avatar" id="updateUrlInput" placeholder="Ссылка на картинку"
                        className="popup__input popup__input_update-avatar" required/>
                    <span className="updateUrlInput-error popup__error"></span>
                    <button type="submit" className="popup__button popup__button_update-avatar">Сохранить</button>
                    <button type="button" aria-label="Закрыть"
                        className="popup__button-close popup__button-close_update-avatar"></button>
                </form>
            </div>
        </div>

        <div className="popup popup_confirm">
            <div className="popup__content popup__content_confirm">
                <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
                <button type="submit" className="popup__button popup__button_confirm">Да</button>
                <button type="button" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_confirm"></button>
            </div>
        </div>

        <div className="popup popup_edit-profile">
            <div className="popup__content">
                <form action="#" name="popupForm" className="popup__form popup__form_edit" novalidate>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <input type="text" name="name" id="nameInput" value="Жак-Ив Кусто" placeholder="Имя"
                        className="popup__input popup__input_name" minlength="2" maxlength="40" required/>
                    <span className="nameInput-error popup__error"></span>
                    <input type="text" name="about" id="jobInput" value="Исследователь океана"
                        placeholder="Вид деятельности" className="popup__input popup__input_job" minlength="2"
                        maxlength="200" required/>
                    <span className="jobInput-error popup__error"></span>
                    <button type="submit" className="popup__button">Сохранить</button>
                    <button type="button" aria-label="Закрыть" className="popup__button-close"></button>
                </form>
            </div>
        </div>

        <div className="popup popup_add">
            <div className="popup__content popup__content_add">
                <form action="#" name="popupFormAdd" className="popup__form popup__form_add" novalidate>
                    <h2 className="popup__title popup__title_add">Новое место</h2>
                    <input type="text" name="name" id="titleInput" placeholder="Название"
                        className="popup__input popup__input_title" minlength="2" maxlength="30" required/>
                    <span className="titleInput-error popup__error"></span>
                    <input type="url" name="link" id="urlInput" placeholder="Ссылка на картинку"
                        className="popup__input popup__input_link" required/>
                    <span className="urlInput-error popup__error"></span>
                    <button type="submit" className="popup__button popup__button_add">Создать</button>
                    <button type="button" aria-label="Закрыть"
                        className="popup__button-close popup__button-close_add"></button>
                </form>
            </div>
        </div>

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

    </main>
    );
}

export default Main;