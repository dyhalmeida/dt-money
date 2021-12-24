import ReactModal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';

import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';


interface NewTransactioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactioModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeSVG} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder='título' />
        <input type="number" placeholder='valor' />
        <TransactionTypeContainer>
          <button
            type="button"

          >
            <img src={incomeSVG} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"

          >
            <img src={outcomeSVG} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder='categoria' />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}