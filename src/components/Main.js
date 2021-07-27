import React from 'react';
import avatar from '../images/avatar.jpg'
import api from './utils/api'

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    React.useEffect(() => {
        api
        .editAvatar()
        .then((res) => {
            setUserAvatar(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <main className="content">
        <section className="profile root__section">
            <div className="profile__image">
                <img onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватарка" className="profile__avatar"/>
            </div>
            <div className="profile__info">
                <div className="profile__name-section">
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль" className="profile__edit-button"></button>
                </div>
                <p className="profile__profession">{userDescription}</p>
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