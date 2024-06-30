// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/SignUp';
import AdminPage from './Components/Admin/AdminPage';
import UserPage from './Components/User/UserPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/admin" element={<AdminPage/>} />
                <Route path="/user" element={<UserPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
