function Card(card) {
    const handleClick = () => {
        card.onCardClick(card.data);
    }

    return (
        <li className="template__card card" key={card._id}>
            <div className="elements__element">
                <button type="button" className="elements__delete"></button>
                <img onClick={handleClick} src={card.link} style={{ backgroundImage: `url(${card.link})` }} alt={card.name} className="elements__image" />
                <div className="elements__title">
                    <h2 className="elements__caption">{card.name}</h2>
                    <div className="elements__like-box">
                        <button type="button" className="elements__like"></button>
                        <span className="elements__like-count">{card.likes}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Card;