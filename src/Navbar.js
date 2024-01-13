import React, { useState } from 'react';
import axios from 'axios';
import './Navbar.css';

function Navbar() {
  const [searchText, setSearchText] = useState('');

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/search', { query: searchText });
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src="/Hotels.com_logo.png" alt="Hotels.com Logo" />
      </a>
      <button className="shop-travel-btn">Shop travel</button>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-btn">Search</button>
      </div>
      <div className="navbar-links">
        <a href="/get-the-app">Get the app</a>
        <a href="/choose-language">English</a>
        <a href="/list-your-property">List your property</a>
        <a href="/support">Support</a>
        <a href="/trips">Trips</a>
        <a href="/sign-in">Sign in</a>
      </div>
    </nav>
  );
}

export default Navbar;
