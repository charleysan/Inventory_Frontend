// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}><Outlet /></main>
      <hr />
      <footer><p>© {new Date().getFullYear()}</p></footer>
    </div>
  );
}
export default App;