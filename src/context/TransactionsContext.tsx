import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

export interface ITransaction {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string,
}

export type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface TransactionsContextData {
  transactions: Array<ITransaction>,
  createTransaction: (transaction: ITransactionInput) => void
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Array<ITransaction>>([]);

  useEffect(() => {

    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));

  }, []);

  function createTransaction(transaction: ITransactionInput) {
    api.post('transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}