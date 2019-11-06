import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '@/common/Header';
import Footer from '@/common/Footer';

import Home from '@/view/Home';
import AboutUs from '@/view/AboutUs';
import PrivacyPolicy from '@/view/PrivacyPolicy';
import Careers from '@/view/Careers';
import Issuer from '@/view/Issuer';
export default function Routers() {
  return (
    <Router>
      {/* 头部 */}
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/careers' component={Careers} />
        <Route exact path='/issuer' component={Issuer} />
        <Route exact path='/privacy_policy' component={PrivacyPolicy} />
      </Switch>
      {/* 尾部 */}
      <Footer />
    </Router>
  );
}
