import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './pages/Greeting';
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello Friends</h1>
      <Link to="/greeting">Welcome</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default App;
