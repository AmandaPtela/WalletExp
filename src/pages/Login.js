import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../CSS/Login.css';
import '../CSS/Header.css';
import notification from '../components/notification';

// Feito com consulta ao https://serfrontend.com/blog/redux-com-react-para-iniciantes/index.html
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
class Login extends React.Component {
  state = {
    passOk: '',
    emailOk: '',
    formOk: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateForm);
  }

  validateForm = () => {
    const { emailOk, passOk } = this.state;
    if(emailOk && passOk.length > 5) {
      this.setState({ formOk: true });
    }
  }

  resetInputs = () => {
    const { emailOk, passOk } = this.state;
    const minPass = 5;
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (regexEmail.test(emailOk) && passOk.length > minPass) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  currentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem('userData')).user; 
    console.log(currentUser); //para carregar os dados do usuário específico
  }

  render() {
    const { emailOk, passOk, formOk } = this.state;
    const { dispatch } = this.props;

    return (
      <div className="login">
        <form className="form">
          <div id='login-form-title-area'>
            <span>WalletExp</span>
          </div>
          <div id="form-inputs-area">
            <label htmlFor='email-login'
              className="label-input">Email
              <input
                required
                id="email-login"
                className={!emailOk ? "input-login email-login" : "input-login-ok"}
                data-testid="email-input"
                name="emailOk"
                value={emailOk}
                type="text"
                placeholder="email@email.com"
                onChange={this.handleChange}
              />
            </label>
            <label
              htmlFor='pass-login'
              className="label-input">Senha
              <input
                id="pass-login"
                className={!passOk ? "input-login pass-login" : "input-pass-ok"}
                data-testid="password-input"
                required
                name="passOk"
                value={passOk}
                type="password"
                placeholder="digite sua senha"
                onChange={this.handleChange}
              />
            </label>
            <Link to="/carteira">
              <button
                id={formOk ? "login-btn-active" : "login-btn"}
                type="submit"
                disabled={formOk ? false : true}
                onClick={() => {
                  localStorage.setItem('userData', JSON.stringify({ user: emailOk, data: {} }));
                  notification('Login bem sucedido');
                  dispatch({ type: 'login', value: emailOk });
                  this.setState({
                    emailOk: '',
                    passOk: '',
                  });
                }}
              >
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
