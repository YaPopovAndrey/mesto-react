import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupEditAvatar from './PopupEditAvatar.js'
import PopupEditProfile from './PopupEditProfile.js'
import PopupAddPlace from './PopupAddPlace.js'
import ImagePopup from './ImagePopup.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
      <body className="body">
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
</body>
  );
}

export default App;