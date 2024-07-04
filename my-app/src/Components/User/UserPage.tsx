// UserPage.tsx
import React from 'react';
import UserProfile from './UserProfile';
import'./userpage.css'

const UserPage: React.FC = () => {
    return (
<div class="container">
      <div class="main_box">
        <div class="left_box">
          <img
            class="rick"
            src="https://hackaday.com/wp-content/uploads/2023/04/rickroll-featured.jpg?w=600&h=450"
            alt="image"
            width="150px"
            height="150px"
          />
          <p class="full_name left_text">Full Name</p>
          <p class="name left_text"></p>
          <p class="email_address left_text">E-mail address</p>
          <p class="email left_text"></p>
          <p class="passwordofuser left_text">Password of user</p>
          <p class="password left_text"></p>
        </div>
        <div class="right_box">
          <p class="profile_settings">Profile Settings</p>
          <form class="mini_box">
            <input
              class="name_box right_text"
              type="text"
              name="name"
              value="John Doe"
            />
            <input
              class="email_box right_text"
              type="email"
              name="email"
              value="johnDoe@gmail.com"
            />
            <input
              class="password_box1 right_text"
              type="password"
              name="password"
            />
            <input
              class="password_box2 right_text"
              type="password"
              name="password"
            />
            <button class="edit_profile" type="submit">Edit profile</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default UserPage;
