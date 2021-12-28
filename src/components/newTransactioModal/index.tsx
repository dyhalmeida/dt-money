import { FormEvent, useContext, useState } from 'react';
import ReactModal from 'react-modal';
import { TransactionsContext } from '../../context/TransactionsContext';

import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './style';
interface NewTransactioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactioModalProps) {

  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    createTransaction({
      title,
      amount,
      type,
      category
    });

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
          value={amount} 
          onChange={e => setAmount(Number(e.target.value))} 
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