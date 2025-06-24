import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import InfoList from './components/InfoList';
import Quiz from './components/Quiz';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
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
                {!isLoggedIn ? (
                    <LoginForm onLogin={handleLogin} />
                ) : (
                    <>
                        <h2 className="text-center mb-4">🔥 Dark Souls III Bosses</h2>
                        <button
                            className="btn btn-outline-light mb-3"
                            onClick={() => setShowQuiz(!showQuiz)}
                        >
                            {showQuiz ? "Hide Quiz" : "Take the Boss Quiz"}
                        </button>
                        {showQuiz ? <Quiz /> : <InfoList />}
                    </>
                )}
            </div>
        </>
    );
}

export default App;
