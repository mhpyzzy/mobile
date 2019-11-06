import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '@/common/Header';
import Content from '@/common/Content';
import Footer from '@/common/Footer';
export default function Routers() {
  return (
    <Router>
      {/* 头部 */}
      <Header />
      <Content></Content>
      {/* 尾部 */}
      <Footer />
    </Router>
  );
}
