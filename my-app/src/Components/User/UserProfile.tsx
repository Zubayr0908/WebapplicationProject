// UserProfile.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<any>(null); // Replace `any` with appropriate type
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/api/user/profile');
                setUser(response.data);
                setFullName(response.data.fullName);
                setEmail(response.data.email);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleProfileUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('email', email);
            if (photo) formData.append('photo', photo);

            const response = await axios.put('/api/user/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUser(response.data);
            console.log('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setPhoto(files[0]);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <img src={user.photoUrl} alt="Profile" />
            </div>
            <div>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Profile Photo:</label>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>
            <button onClick={handleProfileUpdate}>Update Profile</button>
        </div>
    );
};

export default UserProfile;
