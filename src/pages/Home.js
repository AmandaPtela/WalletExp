import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Header from '../components/Header';
import Wallet from './Wallet';
import '../CSS/Home.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div id="login-area">
          <Routes>
            <Route path="/" exact element=<Login /> />
            <Route path="/carteira" element=<Wallet /> />
          </Routes>
        </div>
      </>
    );
  }
}
export default Home;
