import { Container } from './style';

import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalSVG from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSVG} alt="Entradas" />
        </header>
        <strong>
          R$ 10.000,00
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSVG} alt="Saídas" />
        </header>
        <strong>
          - R$ 3.000,00
        </strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalSVG} alt="Total" />
        </header>
        <strong>
          R$ 7.000,00
        </strong>
      </div>
    </Container>
  );
}