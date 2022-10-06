import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Head from './Head';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signing from './Signing';
import Options1 from './options1';
import Options2 from './options2';
import Faq from './faq';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';
import Shipping from './Shipping';
import Payment from './Payment';
import Products from './Products';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import AdminEditProduct from './AdminEditProduct';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Head />
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signing" element={<Signing />} />
          <Route exact path="/options1" element={<Options1 />} />
          <Route exact path="/options2" element={<Options2 />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route 
            exact 
            path="/product/:productId" 
            element={<Products />} 
          />
          <Route exact path='/shipping' element={<Shipping />} />
          <Route exact path='/payment' element={<Payment />} />
          {/* protected user routes */}
          <Route element={<UserRoute />}>
						<Route
							exact
							path='/user/dashboard'
							element={<UserDashboard />}
						/>
					</Route>
          {/* protected admin routes */}
          <Route element={<AdminRoute />}>
						<Route
							exact
							path='/admin/dashboard'
							element={<AdminDashboard />}
						/>
            <Route
							exact
							path='/admin/edit/product/:productId'
							element={<AdminEditProduct />}
						/>
					</Route>
          <Route path='/not_found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not_found' />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
