import React, { useState, useEffect, FormEvent } from 'react';
import './userpage.css';

interface Profile {
  name: string;
  email: string;
  password: string;
}

// Profile
const Profile: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src="https://hackaday.com/wp-content/uploads/2023/04/rickroll-featured.jpg?w=600&h=450" alt="Profile" className="profile-img" />
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <p>{profile.password}</p>
      </div>
    </div>
  );
};

// Edit Profile
const EditProfile: React.FC<{ profile: Profile; onSave: (profile: Profile) => void }> = ({ profile, onSave }) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);

  const handleSave = () => {
    const updatedProfile = { name, email, password };
    onSave(updatedProfile);
  };

  return (
    <div className="profile-edit">
      <h1>Profile Settings</h1>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-save">Edit Profile</button>
      </form>
    </div>
  );
};

// Main App
const App: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://taskproject-aydr.onrender.com/get_user_info');
        const data: Profile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async (updatedProfile: Profile) => {
    setProfile(updatedProfile);

    try {
      await fetch('https://taskproject-aydr.onrender.com/get_user_info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="profile-container">
        <Profile profile={profile} />
        <EditProfile profile={profile} onSave={handleSave} />
      </div>
    </div>
  );
};

export default App;
