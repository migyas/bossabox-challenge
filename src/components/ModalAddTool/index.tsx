import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface ICreateToolData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface IModalProps {
  isOpen: boolean;
  isOpenRemove: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: Omit<ITools, 'id' >) => void;
}

const ModalAddTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  isOpenRemove,
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateToolData) => {
      const { title, link, description, tags } = data;
      handleAddTool({ title, link, description, tags });

      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} isOpenRemove={isOpenRemove}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Nova Ferramenta</h1>
        <span>Nome da Ferramenta</span>
        <Input name="title" placeholder="Ex: React Native" />
        <span>Link da Ferramenta</span>
        <Input name="link" placeholder="Cole o link" />
        <span>Descrição da Ferramenta</span>
        <Input name="description" placeholder="Descrição" />
        <span>Crie suas tags</span>
        <Input name="tags" placeholder="Crie suas tags" />

        <button type="submit" data-testid="add-tool-button">
          <p className="text">Adicionar Ferramenta</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddTool;
