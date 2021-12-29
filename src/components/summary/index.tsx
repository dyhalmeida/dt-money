import { Container } from './style';

import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';
import { convertCurrencyToBRL } from '../../utils';

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') { 
      acc.deposits += transaction.amount 
      acc.total += transaction.amount
    } else {
      acc.withdraws -= transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSVG} alt="Entradas" />
        </header>
        <strong>
          {convertCurrencyToBRL(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSVG} alt="Saídas" />
        </header>
        <strong>
          {convertCurrencyToBRL(summary.withdraws)}
        </strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalSVG} alt="Total" />
        </header>
        <strong>
          {convertCurrencyToBRL(summary.total)}
        </strong>
      </div>
    </Container>
  );
}