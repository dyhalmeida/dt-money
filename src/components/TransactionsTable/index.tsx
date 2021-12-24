import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionsTable() {

  useEffect(() => {

    api.get('transactions')
      .then(response => console.log(response.data));

  }, []);

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
          <tr>
            <td>Alimentação</td>
            <td className='withdraw'> - R$ 800,00</td>
            <td>Alimentação</td>
            <td>22/12/2021</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className='deposit'>R$ 4.900,00</td>
            <td>Receita</td>
            <td>22/12/2021</td>
          </tr>
          <tr>
            <td>Conta de luz</td>
            <td className='withdraw'> - R$ 100,97</td>
            <td>Casa</td>
            <td>22/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}