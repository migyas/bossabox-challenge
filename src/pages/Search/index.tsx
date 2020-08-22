import React, { useState, useEffect } from 'react';
import { Search as Src } from '@styled-icons/evil';
import { Plus } from '@styled-icons/entypo';

import api from '../../services/api';

import Header from '../../components/Header';
import ModalAddTool from '../../components/ModalAddTool'
import Text from '../../components/Text';
import * as S from './styled';
import ToolsItems from '../../components/ToolsItems';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string;
}

const Search: React.FC = () => {
  const [tools, setTools] = useState<ITools[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenRemove, setModalOpenRemove] = useState(false);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('tools');
      setTools(response.data);
    }

    loadTools();
  }, []);

  async function handleAddTool(
    tool: Omit<ITools, 'id'>,
  ): Promise<void> {
    try {
      const { title, link, description, tags } = tool;

      const response = await api.post('tools', {
        title,
        description,
        link,
        tags
      });

      setTools(state => [...state, response.data]);
    } catch (err) {
      console.log(err);
    }
  }


  async function handleRemoveTool(id: number): Promise<void> {
    await api.delete(`tools/${id}`);

    setTools(tools.filter(tool => tool.id !== id ));
    // const filteredTools = tools.filter(tool => tool.id !== id);
    // setTools([...filteredTools]);
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleModalRemove(): void {
    setModalOpenRemove(!modalOpenRemove);
  }

  return (
    <>
      <Header  />
      <S.Container>
        <S.Content>
          <Text
            component="h1"
            modifiers={['header1']}
            style={{ marginBottom: '2.5rem' }}
          >
            VUTTR
          </Text>
          <Text
            component="p"
            modifiers={['header3']}
            style={{ marginBottom: '4rem' }}
          >
            Very Useful Tools to Remember (Ferramentas Muito Úteis Para se
            Lembrar)
          </Text>
          <S.MainSearch >
            <S.Form>
              <Src size={20} />
              <input
                type="text"
                id="ftext"
                placeholder="Digite o que está procurando"
              />

              <label htmlFor="fcheckbox" className="container">
                <input type="checkbox" id="fcheckbox" />
                <span className="checkmark" />
                <span className="checktext">Pesquisar somente por tags</span>
              </label>
            </S.Form>

            <S.Button type="button" onClick={toggleModal}>
              <Plus size={20} />
              Adicionar
            </S.Button>
            {open && <ModalAddTool isOpen={modalOpen} isOpenRemove={modalOpen} setIsOpen={toggleModal} handleAddTool={handleAddTool}/>}
          </S.MainSearch>

          <S.MainResults data-testid="tools-list">
            {tools && tools.map(tool => (
              <ToolsItems key={tool.id} tool={tool} isOpen={modalOpenRemove} isOpenRemove={modalOpenRemove} setIsOpen={toggleModalRemove} handleDeleteTool={handleRemoveTool} />
            ))}
          </S.MainResults>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Search;
