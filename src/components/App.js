import React from 'react';
import '../index.css';
import Header from './Header';
import Avatar from '../images/avatar.jpg';
import Main from './Main';
import Footer from './Footer';

function App() {
return (
    <div className="App">
        <div className="body">
            <div className="root">
                <Header alt='Логотип "Место"' />
                <Main src={Avatar} />
                <Footer />
            </div>
        </div>
    </div>
);
}

export default App;
