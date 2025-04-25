import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import DeleteModal from './components/DeleteModal';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [transactions, setTransactions] = useLocalStorage('transactions', []);
  const [deleteId, setDeleteId] = useState(null);

  const balance = transactions.reduce(
    (acc, curr) => {
      const amount = curr.amount;
      if (curr.type === 'income') {
        acc.income += amount;
        acc.total += amount;
      } else {
        acc.expense += amount;
        acc.total -= amount;
      }
      return acc;
    },
    { total: 0, income: 0, expense: 0 }
  );

  const handleAddTransaction = (newTransaction) => {
    const transaction = {
      ...newTransaction,
      id: Date.now()
    };
    setTransactions([...transactions, transaction]);
  };

  const handleDeleteTransaction = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setTransactions(transactions.filter(t => t.id !== deleteId));
      setDeleteId(null);
    }
  };

  return (
    <div className="app">
      <Balance balance={balance} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <DeleteModal
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default App; 