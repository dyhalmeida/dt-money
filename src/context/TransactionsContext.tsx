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
  createTransaction: (transaction: ITransactionInput) => Promise<void>
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

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}