import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddTransaction({
      description,
      amount: Number(amount),
      type,
      date: new Date().toISOString().split('T')[0]
    });

    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-form">
      <h3 className="form-title">새로운 거래 추가</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="내용 입력..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="금액 입력..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="type"
              checked={type === 'income'}
              onChange={() => setType('income')}
            />
            수입
          </label>
          <label>
            <input
              type="radio"
              name="type"
              checked={type === 'expense'}
              onChange={() => setType('expense')}
            />
            지출
          </label>
        </div>
        <button type="submit">거래 추가</button>
      </form>
    </div>
  );
};

export default TransactionForm; 