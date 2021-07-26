import React from 'react';
import avatar from '../images/avatar.jpg'

function Main(props) {
    return (
        <main className="content">
        <section className="profile root__section">
            <div className="profile__image">
                <img onClick={props.onEditAvatar} src={avatar} alt="Аватарка" className="profile__avatar"/>
            </div>
            <div className="profile__info">
                <div className="profile__name-section">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль" className="profile__edit-button"></button>
                </div>
                <p className="profile__profession">Исследователь океана</p>
            </div>
            <button onClick={props.onAddPlace} type="button" aria-label="Добавить новое место" className="profile__add-button"></button>
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

    </main>
    );
}

export default Main;