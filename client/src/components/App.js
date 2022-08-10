import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signing from './Signing';
import About from './About';
import Products from './Products';
import Info from './Info';
import NotFound from './NotFound';

const App = () => (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signing" component={Signing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/info" component={Info} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
);

export default App;
