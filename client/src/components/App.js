import React, { useEffect, useEffect1, useEffect2, useEffect3 } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Head from './Head';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signing from './Signing';
import About from './About';
import Products from './Products';
import Info from './Info';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getCategories1 } from '../redux/actions/sizeActions';
import { getCategories2 } from '../redux/actions/goldActions';
import { getCategories3 } from '../redux/actions/stoneActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect1(() => {
    dispatch(getCategories1());
  }, [dispatch]);

  useEffect2(() => {
    dispatch(getCategories2());
  }, [dispatch]);

  useEffect3(() => {
    dispatch(getCategories3());
  }, [dispatch]);

  return (
      <BrowserRouter>
        <Head />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signing" component={Signing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/info" component={Info} />
            <UserRoute exact path="/user/dashboard" component={UserDashboard} />
            <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
  );
};

export default App;
