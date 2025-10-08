import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './signup.css';

import Layout from './landing_page/Layout';
import Homepage from './landing_page/home/Homepage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/Productpage';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Supportpage from './landing_page/support/Supportpage';
import NotFound from './landing_page/NotFound';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<Pricingpage />} />
        <Route path="support" element={<Supportpage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
