import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const { id, description, amount, type, date } = transaction;

  return (
    <div className={`transaction ${type}`}>
      <div className="transaction-info">
        <span className="description">{description}</span>
        <span className="date">{date}</span>
      </div>
      <div className="transaction-amount">
        <span className={type === 'income' ? 'positive' : 'negative'}>
          {type === 'income' ? '+' : '-'}₩{amount.toLocaleString()}
        </span>
        <button onClick={() => onDelete(id)} className="delete-btn">
          X
        </button>
      </div>
    </div>
  );
};

export default Transaction; 