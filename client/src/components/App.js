import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './Header';

const App = () => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
);

export default App;
