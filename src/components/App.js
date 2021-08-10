import React from 'react'
import api from '../utils/Api.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupEditAvatar from './PopupEditAvatar.js'
import PopupEditProfile from './PopupEditProfile.js'
import PopupAddPlace from './PopupAddPlace.js'
import ImagePopup from './ImagePopup.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
            console.log(`Не получилось, ошибка: ${err}`);
        });
}, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setIsImagePopupOpen(false);
}

function handleCardClick(data) {
  setIsImagePopupOpen(true);
  setSelectedCard(data);
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
        <Header />
        <Main 
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        />
        <PopupEditAvatar 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        />
        <PopupEditProfile 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        />
        <PopupAddPlace 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        />
        <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        data={selectedCard}
        />
        <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;