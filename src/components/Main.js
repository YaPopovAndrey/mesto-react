import React from 'react'
import api from '../utils/Api.js'
import Card from './Card.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getAllCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(`Карточки не загружены, ошибка: ${err}`);
            })
    }, []);

    return (
        <main className="content">
            <section className="profile root__section">
                <div className="profile__image">
                    <img onClick={props.onEditAvatar} src={currentUser.avatar} alt="Аватарка" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <div className="profile__name-section">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль" className="profile__edit-button"></button>
                    </div>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button onClick={props.onAddPlace} type="button" aria-label="Добавить новое место" className="profile__add-button"></button>
            </section>

            <section className="elements">
                <ul className="elements__content root__section">
                    {cards.map((card) => (
                        <Card
                            data={card}
                            key={card._id}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;