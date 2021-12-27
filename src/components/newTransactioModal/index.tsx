import { FormEvent, useState } from 'react';
import ReactModal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';

import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import { api } from '../../services/api';


interface NewTransactioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactioModalProps) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = { 
      title,
      value,
      type,
      category,
    }

    api.post('transactions', data)
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder='título' 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder='valor' 
          value={value} 
          onChange={e => setValue(Number(e.target.value))} 
        />
        <TransactionTypeContainer>
          <RadioBox
            onClick={() => setType('deposit')}
            type="button"
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeSVG} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => setType('withdraw')}
            type="button"
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeSVG} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          type="text" 
          placeholder='categoria'
          value={category} 
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}