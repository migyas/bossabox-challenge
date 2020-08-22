import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IModalProps {
  children: any;
  isOpen: boolean;
  isOpenRemove: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, isOpenRemove,  setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [modalStatusRemove, setModalStatusRemove] = useState(isOpenRemove);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setModalStatusRemove(isOpenRemove);
  }, [isOpenRemove]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus || modalStatusRemove}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
