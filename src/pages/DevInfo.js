import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './DevInfo.css'; // Import a CSS file for styling

function DevInfo() {
    // Define state to store input values
    const [inputs, setInputs] = useState({
        name: '',
        password: '',
        email: '',
        skillset: '',
    });

    // Define a function to update the corresponding input value
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    // Define a function to handle the final submit button click
    const handleFinalSubmit = () => {
        // Create a JSON object containing the form data
        const formData = {
            username: inputs.name,
            password: inputs.password,
            email: inputs.email,
            skillset: inputs.skillset,
        };

        // Make a POST request to send the data
        axios.post("http://localhost:3001/DevRegister", formData)
            .then((response) => {
                alert('Data sent successfully');
                // Optionally, you can handle the response from the server here
            })
            .catch((error) => {
                alert('Error sending data');
                console.error(error);
            });
    };

    return (
        <div>
            <h1>DevInfo</h1>
            <div className="input-container">
                <label>Enter your name</label><br />
                <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="input-container">
                <label>Enter your password</label><br />
                <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleInputChange}
                />
            </div>

            <div className="input-container">
                <label>Enter your email</label><br />
                <input
                    type="text"
                    name="email"
                    value={inputs.email}
                    onChange={handleInputChange}
                />
            </div>

            <div className="input-container">
                <label>Enter your skillset</label><br />
                <input
                    type="text"
                    name="skillset"
                    value={inputs.skillset}
                    onChange={handleInputChange}
                />
            </div>

            <button type="button" onClick={handleFinalSubmit}>
                Submit
            </button>
        </div>
    );
}

export default DevInfo;