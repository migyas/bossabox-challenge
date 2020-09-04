import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Form } from './styles';
import Text from '../Text';
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
  setIsOpen: () => void;
  handleAddTool: (tool: Omit<ITools, 'id' >) => void;
}

const ModalAddTool: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTool,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateToolData) => {
      const { title, link, description, tags } = data;
      handleAddTool({ title, link, description, tags });

      try {

      } catch (err) {
        console.log(err)
      }

      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Text component="h1" modifiers={['header3']}>Nova Ferramenta</Text>

        <Text component="span" modifiers={['body']}>Nome da Ferramenta</Text>
        <Input name="title" placeholder="Ex: React Native" required />

        <Text component="span" modifiers={['body']}>Link da Ferramenta</Text>
        <Input name="link" placeholder="Ex: notion.io" required />

        <Text component="span" modifiers={['body']}>Descrição da Ferramenta</Text>
        <Input name="description" placeholder="Descrição" required />

        <Text component="span" modifiers={['body']}>Crie suas tags</Text>
        <Input name="tags" placeholder="Crie suas tags" />

        <button type="submit" data-testid="add-tool-button">
          <p className="text">Adicionar Ferramenta</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddTool;
