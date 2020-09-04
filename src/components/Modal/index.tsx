import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#FFFFFF',
          color: '#170C3A',
          borderRadius: '8px',
          width: '570px',
          maxHeight: '616px',
          border: 'none',
          boxShadow: '0px 20px 25px #0000001A',
        },
        overlay: {
          backgroundColor: '#170C3AE6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
