import React, { useState, useEffect } from 'react';
import { Search as Src } from '@styled-icons/evil';
import { Plus } from '@styled-icons/entypo';

import api from '../../services/api';

import Header from '../../components/Header';
import ModalAddTool from '../../components/ModalAddTool'
import Text from '../../components/Text';
import ToolsItems from '../../components/ToolsItems';
import Input from '../../components/Input';

import * as S from './styled';

interface ITools {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string;
}

const Search: React.FC = () => {
  const [tools, setTools] = useState<ITools[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagsList, setTagsList] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenRemove, setModalOpenRemove] = useState(false);

  async function getTool(): Promise<any> {
    const response = await api.get('tools');
    const toolsList = response.data;

    setTools(toolsList);
  }

  async function getTags(): Promise<any> {
    const response = await api.get('tools');
    const toolsTags = response.data.map((item:any) => item.tags);

    const result = toolsTags.map((element: any) => {
      return element
    });

    setTagsList(result);
  }

  async function searchTool(title: any, ): Promise<any> {
    const response = await api.get(`tools?q=${title}`);
    setTools(response.data);
  }

  // function showTags(): any {
  //   const mapTools = tools.map(e => <span key={e.id}>{e.tags}</span>);

  //   setTagsList(mapTools);
  //   console.log(mapTools);
  // }

  useEffect(() => {
    getTool();
    getTags();
    searchTool(searchTerm);

  }, [searchTerm]);

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
            <div >
              <Src size={20} />
              <S.Form onSubmit={()=> {}}>
                <Input
                  name="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  type="text"
                  id="ftext"
                  placeholder="Pesquisar por nome ou tag"
                />
              </S.Form>
            </div>


            <S.Button type="button" onClick={toggleModal}>
              <Plus size={20} />
              Adicionar
            </S.Button>
            {open && <ModalAddTool isOpen={modalOpen} setIsOpen={toggleModal} handleAddTool={handleAddTool}/>}
          </S.MainSearch>

          <S.MainResults >
            {tools && tools.map(tool => (
              <ToolsItems key={tool.id}  isOpen={modalOpenRemove} setIsOpen={toggleModalRemove} tool={tool} handleDelete={handleRemoveTool} />
            ))}
          </S.MainResults>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Search;
