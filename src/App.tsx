import { useState } from 'react';

import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import ReactModal from 'react-modal';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/newTransactioModal';
import { TransactionsProvider } from './context/TransactionsContext';

ReactModal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal} 
      />
      <Dashboard />
     <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
