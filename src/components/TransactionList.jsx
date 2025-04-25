import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>내역</h3>
      <div className="transactions">
        {transactions.length === 0 ? (
          <p className="no-transactions">거래 내역이 없습니다.</p>
        ) : (
          transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              onDelete={onDeleteTransaction}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList; 