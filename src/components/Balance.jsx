import React from 'react';

const Balance = ({ balance }) => {
  return (
    <>
      <h1>용돈기입장</h1>
      <div className="balance-container">
        <div className="balance-box total-balance">
          <h3>잔액</h3>
          <div className="balance-amount">₩{balance.total.toLocaleString()}</div>
        </div>
        <div className="balance-box">
          <div className="balance-details">
            <div className="balance-item">
              <h3>수입</h3>
              <div className="balance-amount positive">
                ₩{balance.income.toLocaleString()}
              </div>
            </div>
            <div className="balance-divider"></div>
            <div className="balance-item">
              <h3>지출</h3>
              <div className="balance-amount negative">
                ₩{balance.expense.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance; 