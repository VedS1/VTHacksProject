import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './NGOInfo.css'; // Import a CSS file for styling

function NGOInfo() {
    // Define state to store input values
    const [inputs, setInputs] = useState({
        name: '',
        password: '',
        email: '',
        location: '',
        purpose: '',
        lookingFor: '',
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
            name: inputs.name,
            password: inputs.password,
            email: inputs.email,
            location: inputs.location,
            purpose: inputs.purpose,
            lookingFor: inputs.lookingFor,
        };

        // Make a POST request to send the data
        axios.post("http://localhost:3000/ngoinfo", formData)
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
            <h1>NGOInfo</h1>
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
                <label>Enter your location</label><br />
                <input
                    type="text"
                    name="location"
                    value={inputs.location}
                    onChange={handleInputChange}
                />
            </div>

            <div className="input-container">
                <label>Enter your purpose</label><br />
                <input
                    type="text"
                    name="purpose"
                    value={inputs.purpose}
                    onChange={handleInputChange}
                />
            </div>

            <div className="input-container">
                <label>Enter what you are looking for</label><br />
                <input
                    type="text"
                    name="lookingFor"
                    value={inputs.lookingFor}
                    onChange={handleInputChange}
                />
            </div>

            <button type="button" onClick={handleFinalSubmit}>
                Submit
            </button>
        </div>
    );
}

export default NGOInfo;