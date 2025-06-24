import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('🔥 You must enter both email and password to proceed, Unkindled.');
            return;
        }
        setError('');
        onLogin();
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{
                width: '24rem',
                backgroundColor: 'rgba(28, 28, 28, 0.6)',
                color: '#f0e6d2',
                border: '1px solid #444',
                backdropFilter: 'blur(6px)'
            }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                        🔥 Bonfire Login
                    </Card.Title>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Sign (Email)</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="chosen@undead.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ backgroundColor: '#2c2c2c', color: '#f0e6d2' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password of Flame</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ backgroundColor: '#2c2c2c', color: '#f0e6d2' }}
                            />
                        </Form.Group>

                        <Button variant="outline-light" type="submit" className="w-100">
                            Link the Flame
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoginForm;
