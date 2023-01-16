import React from 'react';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import '../CSS/Wallet.css';
// Feito com consulta ao https://serfrontend.com/blog/redux-com-react-para-iniciantes/index.html
class Wallet extends React.Component {
  render() {
    return (
      <div className="carteira">
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
