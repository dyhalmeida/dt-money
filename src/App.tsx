import { useState } from 'react';

import { Dashboard } from './components/dashboard';
import { Header } from './components/header';
import ReactModal from 'react-modal';

import { GlobalStyle } from './styles/global';

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
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal} 
      />
      <Dashboard />
      <ReactModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        
      </ReactModal>
      <GlobalStyle />
    </>
  );
}
