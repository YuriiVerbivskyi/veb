import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
    const handleLogin = () => {
        alert('🔥 Logged in!');
    };

    return (
        <>
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

            <div style={{ position: "relative", zIndex: 1, color: "#fff", padding: "20px" }}>

                <LoginForm onLogin={handleLogin} />
            </div>
        </>
    );
}

export default App;
