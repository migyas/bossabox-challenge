import React, { useRef, useState, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import api from "../../services/api";

interface ITools {
  id: number ;
}

interface IModalProps {
  tool: ITools,
  isOpen: boolean;
  isOpenRemove: boolean;
  setIsOpen: () => void;
  handleDeleteTool: (id: number) => Promise<void>;
}


const ModalRemoveTool: React.FC<IModalProps> = ({tool, isOpen, setIsOpen, isOpenRemove, handleDeleteTool}) => {
  const formRef = useRef<FormHandles>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRemove = useCallback(
    async (data: ITools) => {

      handleDeleteTool(data.id);
      setIsOpen();
    },
    [handleDeleteTool, setIsOpen],
  );

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} isOpenRemove={isOpenRemove} >
      <Form ref={formRef} onSubmit={handleRemove} >
        <h1>Excluir Ferramenta</h1>

        <button type="submit" onClick={()=> toggleModal} >
          <p className="text">Não</p>
        </button>
        <button
          type="submit"
          onClick={() => handleDeleteTool(tool.id)}
          data-testid={`remove-tool-${tool.id}`}
        >
          <p className="text">Sim</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalRemoveTool;
