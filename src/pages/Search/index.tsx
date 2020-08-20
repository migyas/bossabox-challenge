import React from 'react';
import { Search as Src } from '@styled-icons/evil';
import { Plus } from '@styled-icons/entypo';

import Header from '../../components/Header';
import Text from '../../components/Text';
import * as S from './styled';
import ToolsItems from '../../components/ToolsItems';

const Search: React.FC = () => (
  <>
    <Header />
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
        <S.MainSearch>
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

          <S.Button type="button">
            <Plus size={20} />
            Add
          </S.Button>
        </S.MainSearch>

        <S.MainResults>
          <ToolsItems />
        </S.MainResults>
      </S.Content>
    </S.Container>
  </>
);

export default Search;
