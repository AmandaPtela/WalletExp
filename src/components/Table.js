import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remove, editar } from '../testes/Functions';
import '../CSS/Table.css';

class Table extends Component {
  render() {
    const { despesas, dispatch, valorTotal } = this.props;
    // const n = 2;
    return (
      <div id="table-wallet">
        <thead id="title-table-area">
          <tr id="titles-table">
            <th className="titles titles-desc">Descrição</th>
            <th className="titles titles-curtos">Categoria</th>
            <th className="titles ">Forma de pagamento</th>
            <th className="titles titles-curtos">Valor</th>
            <th className="titles-btn">Editar | Excluir</th>
          </tr>
        </thead>
        <tbody id="title-body-area">
          {
            despesas.map((i, index) => (
              <tr key={ index } id="body-table">
                <td className="bodies">{ i.description }</td>
                <td className="bodies bodies-curtos">{ i.tag }</td>
                <td className="bodies">{ i.method }</td>
                <td className="bodies-special"><span id="bodie-value">{ (i.value).replace('.', ',') }</span></td>
                <td className="bodies-btn">
                  <button
                    className="edita"
                    type="button"
                    value={ i.id }
                    key={ i.value }
                    data-testid="edit-btn"
                    onClick={ () => editar(i.id, dispatch) }
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="exclui"
                    value={ i.value }
                    key={ i.id }
                    data-testid="delete-btn"
                    onClick={ (e) => remove(e, despesas, dispatch, valorTotal) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
  valorTotal: state.wallet.somaTotal,
});

Table.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  valorTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Table);
