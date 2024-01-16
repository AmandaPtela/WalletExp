import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Header from '../components/Header';
import Wallet from './Wallet';
import '../CSS/Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import notification from '../components/notification';

class Home extends React.Component {
  render() {
    const { dispatch, logged } = this.props;
    return (
      <div id="home">
        <Header />
        <div id="main-content">
          <Routes>
            <Route path="/" exact element=<Login /> />
            <Route path="/carteira" element=<Wallet /> />
          </Routes>

          {logged ?
            <div id="btn-logoff">
              <Link to="/">
                <button onClick={() => {
                  notification('Sessão encerrada');
                  dispatch({ type: 'logout' });
                }}>Logout</button>
              </Link>
            </div>
            : null
          }
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  logged: state.user.logged,
});

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Home);
