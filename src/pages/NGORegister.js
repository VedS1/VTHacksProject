import React from 'react';
import { useNavigate } from 'react-router-dom';

function NGORegister() {
    // Access the navigate function from React Router
    const navigate = useNavigate();

    // Define a function to handle the button click
    const handleButtonClick = () => {
        // Use navigate to go to a different page
        navigate('/ngoinfo'); // Replace '/other-page' with the actual path you want to navigate to
    };

    return (
        <div>
            <h1>Register as NGO</h1>
            {/* Add a button element with an event handler */}
            <button id="Button" onClick={handleButtonClick}>
                Click Me to Go to Another Page
            </button>
        </div>
    );
}

export default NGORegister;