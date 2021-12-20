import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Account = () => {
    return (
        <div class="account">
        <div class="login">
          <form action="" method="post">
  
            <h2>নতুন একাউন্ট করুন</h2>
            <input
              type="text"
              name="username"
              placeholder="নতুন আইডি নম্বর "
              required
            />
            <input type="email" name="email" placeholder="আপনার ইমেইল " />
            <input
              type="number"
              name="phone"
              placeholder=" আপনার মোবাইল নাম্বার "
              required
            />
            <input
              type="text"
              name="address"
              placeholder="আপনার ঠিকানা "
              required
            />
            <input
              type="password"
              name="password_1"
              placeholder=" নতুন পাসওয়ার্ড "
              required
            />
            <input
              type="password"
              name="password_2"
              placeholder=" পাসওয়ার্ড আবার দিন  "
              required
            />
            <button type="submit" name="reg" value="submit">
              <b>রেজিস্টেশন করুন </b>
            </button>
  
       <Link to="Singin">পুরুনো একাউন্ট থাকলে লগইন করুন</Link>     
          </form>
        </div>
      </div>
    );
};

export default Account;