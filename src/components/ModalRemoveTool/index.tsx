import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Text from '../Text';

interface ITools {
  id: number ;
}

interface IModalProps {
  tool: ITools,
  isOpen: boolean;
  setIsOpen: () => void;
  handleDelete: (id: number) => {};
}

const ModalRemoveTool: React.FC<IModalProps> = ({tool, isOpen, setIsOpen, handleDelete}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ITools) => {
      const { id } = data;
      handleDelete( id );

      setIsOpen();
    },
    [handleDelete, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <Form ref={formRef} onSubmit={handleSubmit} >
        <Text component="h1" modifiers={['header4']}>Deseja Excluir?</Text>
        <Text component="span" modifiers={['body']}>*Essa ação não tem mais volta</Text>

        <button type="button" onClick={setIsOpen} className="no" >
          <p className="text">Não</p>
        </button>
        <button
          type="submit"
          onClick={() => handleDelete(tool.id)}
          data-testid={`remove-tool-${tool.id}`}
          className="yes"
        >
          <p className="text">Sim</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalRemoveTool;
