import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';
import { convertCurrencyToBRL, convertDateToBR } from '../../utils';
import { Container } from './style';

export function TransactionsTable() {

  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{convertCurrencyToBRL(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{convertDateToBR(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}