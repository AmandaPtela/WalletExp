import React from 'react';
import '../CSS/Header.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { soma } from '../testes/Functions';

// Feito com consulta ao https://serfrontend.com/blog/redux-com-react-para-iniciantes/index.html
class Header extends React.Component {
  render() {
    const { logged, despesas, dispatch } = this.props;
    const somaTotal = soma(despesas, dispatch);
    dispatch({ type: 'somaTotal', value: Number(somaTotal) });

    const user = JSON.parse(localStorage.getItem('userData')).user;
    
    return (
      (logged && user && user.length > 0)
        ? (
          <div className="header">
            <div id="logo-header">
              <span className="header-logo">WalletExp</span>
            </div>
            <div id="total-field">
              <span data-testid="total-field" id="total">
                {`R$ ${Number(somaTotal).toFixed(2)}`}
              </span>
              <span id="header-currency-field"> Gasto total </span>
            </div>
            <div id="user-field">
              <span id="header-user-field"> Usuário </span>
              <span id="email-field">
                {user}
              </span>
            </div>
          </div>
        )
        : (
          <span className="header-off">
            WalletExp
          </span>
        )
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.email,
  logged: state.user.logged,
  despesas: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
