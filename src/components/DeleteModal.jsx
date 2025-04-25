import React from 'react';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>정말 삭제하시겠습니까?</h3>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-btn">확인</button>
          <button onClick={onClose} className="cancel-btn">취소</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal; 