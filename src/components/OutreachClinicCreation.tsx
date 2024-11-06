import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OutreachClinicCreation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons';
const OutreachClinicCreation: React.FC = () => {
    const navigate = useNavigate();

    const [clinicName, setClinicName] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [taluk, setTaluk] = useState('');
    const [panchayat, setPanchayat] = useState('');
    const [startDate, setStartDate] = useState('');

    const handleHomeClick = () => {
        navigate('/home');  // Assuming '/home' is the route to the homepage
    };
    const handleNextClick = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !clinicName ||
            !pincode ||
            !state ||
            !district ||
            !taluk ||
            !panchayat 
        ) {
            alert('Please fill out all required fields.');
            return;
        }

        navigate('/resource-planning');
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
                <h1 className="title">Outreach Clinic</h1>
                <div className="header-right">
                    <FontAwesomeIcon icon={faHome} className="home-icon" onClick={handleHomeClick} />
                    <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                </div>
            </header>
            <form className="clinic-form" onSubmit={handleNextClick}>
                <label>
                    Outreach Clinic Name:*
                    <input
                        type="text"
                        placeholder="Enter Outreach Clinic Name"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Pincode:*
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                    />
                </label>
                <label>
                    State Name:*
                    <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    >
                        <option value="">Search or Select State Name</option>
                        <option value="TamilNadu">TamilNadu</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </label>
                <label>
                    District Name:*
                    <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        required
                    >
                        <option value="">Search or Select District Name</option>
                        <option value="NKL">NKL</option>
                        <option value="TRY">TRY</option>
                        <option value="SLM">SLM</option>
                    </select>
                </label>
                <label>
                    Taluk Name:*
                    <select
                        value={taluk}
                        onChange={(e) => setTaluk(e.target.value)}
                        required
                    >
                        <option value="">Search or Select Taluk Name</option>
                        <option value="NKL">NKL</option>
                        <option value="TRY">TRY</option>
                        <option value="SLM">SLM</option>
                    </select>
                </label>
                <label>
                    Panchayat/Village Name:*
                    <select
                        value={panchayat}
                        onChange={(e) => setPanchayat(e.target.value)}
                        required
                    >
                        <option value="">Search or Select Panchayat/Village Name</option>
                        <option value="NKL">NKL</option>
                        <option value="TRY">TRY</option>
                        <option value="SLM">SLM</option>
                        <option value="CBE">CBE</option>
                    </select>
                </label>
                <label>
                    Outreach Clinic Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        
                    />
                </label>
                <label>
                    Outreach Clinic End Date:
                    <input type="date" />
                </label>
                <label>
                    Outreach Clinic ID:*
                    <input type="text" placeholder="Show 7 digit System ID" />
                </label>
               <button type="submit" className="submit-button">
                    Next
                </button>
            </form>
        </div>
    );
};

export default OutreachClinicCreation;
