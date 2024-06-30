// UserPage.tsx
import React from 'react';
import UserProfile from './UserProfile';

const UserPage: React.FC = () => {
    return (
        <div>
            <h2>User Page</h2>
            <UserProfile />
            {/* User profile update form */}
        </div>
    );
};

export default UserPage;
