import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Image } from 'react-bootstrap';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        fetch('/questions.json')
            .then(res => res.json())
            .then(setQuestions)
            .catch(console.error);
    }, []);

    const handleAnswer = (option) => {
        const correct = questions[index].answer;
        if (option === correct) setScore(score + 1);

        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {
            setShowResult(true);
        }
    };

    const getWeaponImage = () => {
        const total = questions.length;
        const ratio = score / total;

        if (ratio <= 0.4) {
            return { src: "/1.jpg", label: "Rotten dagger" };
        } else if (ratio < 1) {
            return { src: "/2.jpg", label: "Black knight`s sword" };
        } else {
            return { src: "/3.jpg", label: "Cathdral knight`s greatsword" };
        }
    };

    if (questions.length === 0) return <div>Loading...</div>;

    if (showResult) {
        const weapon = getWeaponImage();

        return (
            <Container className="mt-5 text-center text-light">
                <h2>Quiz Completed!</h2>
                <p>Your Score: {score} out of {questions.length}</p>
                <p>You have earned: <strong>{weapon.label}</strong></p>
                <Image src={weapon.src} alt={weapon.label} fluid rounded className="my-4" style={{ maxHeight: "300px" }} />
                <Button onClick={() => {
                    setIndex(0);
                    setScore(0);
                    setShowResult(false);
                }}>Restart Quiz</Button>
            </Container>
        );
    }

    const q = questions[index];

    return (
        <Container className="mt-4 text-light">
            <Card bg="dark" text="light" className="mb-4">
                <Card.Body>
                    <Card.Title>Question {index + 1} of {questions.length}</Card.Title>
                    <Card.Text>{q.question}</Card.Text>
                    {q.options.map((opt, i) => (
                        <Button
                            key={i}
                            variant="outline-light"
                            onClick={() => handleAnswer(opt)}
                            className="d-block mb-2"
                        >
                            {opt}
                        </Button>
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Quiz;
