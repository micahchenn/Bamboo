import React, { useState } from 'react';
import '../css/Signup.css';  // Import the CSS
const csrftoken = document.cookie.split('; ').find(row => row.startsWith('csrftoken')).split('=')[1];

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an object with the form data
        const data = { name, email, password };

        // Send a POST request to the signup view
        fetch('signup/authenticate-signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())  // Get the response text
        .then(text => {
            try {
                return JSON.parse(text);  // Try to parse the text as JSON
            } catch (error) {
                console.log('Error parsing JSON:', error);
                console.log('Raw response:', text);
                throw error;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Signup;