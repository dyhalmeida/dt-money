import ReactModal from 'react-modal';
import { Container } from './style';

import closeSVG from '../../assets/close.svg';

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
        <input type="text" placeholder='categoria' />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}