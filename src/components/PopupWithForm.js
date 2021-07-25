function PopupWithForm(props) {
    return (
        <div className= {`popup popup_is-opened popup_${props.name}`}>
            <div className={`popup__content popup__content_${props.name}`}>
                <form action="#" name={props.name} className={`popup__form popup__form_${props.name}`} novalidate>
                    <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
                    {props.children}
                    <button type="submit" className={`popup__button popup__button_${props.name}`}>{props.buttonText}</button>
                    <button type="button" aria-label="Закрыть"
                        className={`popup__button-close popup__button-close_${props.name}`}></button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;

// Далее импортирую  компонент в каждый компонент попапов, добавляя в каждом из них нужную разметку