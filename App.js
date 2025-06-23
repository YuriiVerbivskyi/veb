import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import InfoList from './components/InfoList';

function App() {
    const [loggedIn, setLoggedIn] = useState(false); // стейт входу

    return (
        <>
            {/* Фон */}
            <div
                style={{
                    backgroundImage: "url('/bonfiredarksouls.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                }}
            ></div>

            {/* Контент */}
            <div style={{ position: "relative", zIndex: 1, color: "#fff", padding: "20px" }}>
                {loggedIn ? (
                    <InfoList /> // якщо ввійшов — показати босів
                ) : (
                    <LoginForm onLogin={() => setLoggedIn(true)} /> // форма входу
                )}
            </div>
        </>
    );
}

export default App;
