import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/OutreachClinicInfo.css';

// Define the type for the clinic data
interface Clinic {
    id: string;
    name: string;
    pincode: string;
    state: string;
    district: string;
    taluk: string;
    village: string;
}

const OutreachClinicInfo: React.FC = () => {
    const navigate = useNavigate();

    // Set the type for clinics and selectedClinic using the Clinic interface
    const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
    const [clinics] = useState<Clinic[]>([
        { id: '1234567', name: 'Ennore 27th April', pincode: '600041', state: 'Tamil Nadu', district: 'Kanchipuram', taluk: 'Kanchipuram', village: 'Kanchipuram' },
        { id: '2345679', name: 'Example Clinic', pincode: '600042', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Chennai', village: 'Chennai' },
    ]);

    const handleClinicSelect = (clinicId: string) => {
        const clinic = clinics.find(c => c.id === clinicId) || null;
        setSelectedClinic(clinic);
    };

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleEditClick = () => {
        console.log('Edit button clicked');
    };

    return (
        <div className="container2">
            <header className="header">
                <button className="back-button" onClick={handleBackClick}>Back</button>
                <h1>Outreach Clinic Information</h1>
            </header>
            <main className="content">
                <div className="search-container">
                    <label>Search:</label>
                    <select onChange={(e) => handleClinicSelect(e.target.value)} defaultValue="">
                        <option value="" disabled>Select by ID/Name</option>
                        {clinics.map(clinic => (
                            <option key={clinic.id} value={clinic.id}>{clinic.id}</option>
                        ))}
                    </select>
                </div>
                {selectedClinic && (
                    <div className="clinic-details">
                        <p><strong>Outreach Clinic ID:</strong> {selectedClinic.id}</p>
                        <p><strong>Outreach Clinic Name:</strong> {selectedClinic.name}</p>
                        <p><strong>Pincode:</strong> {selectedClinic.pincode}</p>
                        <p><strong>State Name:</strong> {selectedClinic.state}</p>
                        <p><strong>District Name:</strong> {selectedClinic.district}</p>
                        <p><strong>Taluk Name:</strong> {selectedClinic.taluk}</p>
                        <p><strong>Panchayat/Village Name:</strong> {selectedClinic.village}</p>
                        <button className="edit-button" onClick={handleEditClick}>Edit</button>
                    </div>
                )}
                <button className="create-button" onClick={() => navigate('/create-outreach-clinic')}>Create New Outreach Clinic</button>
            </main>
        </div>
    );
};

export default OutreachClinicInfo;
