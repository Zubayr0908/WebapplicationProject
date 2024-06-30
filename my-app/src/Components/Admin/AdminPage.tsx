// AdminPage.tsx
import React from 'react';
import UserList from './UserList';

const AdminPage: React.FC = () => {
    return (
        <div>
            <h2>Admin Page</h2>
            <UserList />
            {/* Other admin functionalities */}
        </div>
    );
};

export default AdminPage;
