import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !pass) {
            alert("🔥 Please enter your Sign and Password of Flame.");
            return;
        }

        // якщо все ок — викликаємо логін
        onLogin();
    };

    return (
        <Card style={{ backgroundColor: '#111', color: '#eee', maxWidth: '400px', margin: 'auto' }}>
            <Card.Body>
                <h3 className="mb-4 text-center">🔥 Bonfire Login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Sign (Email)</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="chosen@undead.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password of Flame</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="••••••"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="outline-light" type="submit" className="w-100">
                        Link the Flame
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default LoginForm;
