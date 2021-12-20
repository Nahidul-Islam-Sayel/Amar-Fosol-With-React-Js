import React from 'react';
import { Link } from 'react-router-dom';

const Singin = () => {
    return (
        <div class="account">
        <div class="login">
          <form action="signin.php" method="POST">
            <h2>লগইন করুন</h2>

  
            <input
              type="text"
              name="username"
              placeholder="আপনার আইডি "
              required
            />
            <input
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড "
              required
            />
            <button type="submit" name="log"><b>প্রবেশ করুন </b></button>

          <p>or</p>
            <Link to="/Account">নতুন একাউন্ট খুলুন </Link>
          </form>
        </div>
      </div>
    );
};

export default Singin;