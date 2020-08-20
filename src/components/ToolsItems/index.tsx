import React from 'react';

import * as S from './styled';
import Text from '../Text';

const ToolsItems: React.FC = () => (
  <S.Container>
    <S.SearchItem>
      <S.Button type="button">Remover</S.Button>
      <Text component="h2" modifiers={['header4', 'margMedium']}>
        Notion
      </Text>
      <Text component="p" modifiers={['body', 'margSmall']}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been standard dummy text ever since the 1500s,
        when an unknown printer took a galley
      </Text>

      <Text component="p" modifiers={['body']}>
        #organização
      </Text>
    </S.SearchItem>
    <S.SearchItem>
      <S.Button type="button">Remover</S.Button>
      <Text component="h2" modifiers={['header4', 'margMedium']}>
        Notion
      </Text>
      <Text component="p" modifiers={['body', 'margSmall']}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been standard dummy text ever since the 1500s,
        when an unknown printer took a galley
      </Text>

      <Text component="p" modifiers={['body']}>
        #organização
      </Text>
    </S.SearchItem>
    <S.SearchItem>
      <S.Button type="button">Remover</S.Button>
      <Text component="h2" modifiers={['header4', 'margMedium']}>
        Notion
      </Text>
      <Text component="p" modifiers={['body', 'margSmall']}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been standard dummy text ever since the 1500s,
        when an unknown printer took a galley
      </Text>

      <Text component="p" modifiers={['body']}>
        #organização
      </Text>
    </S.SearchItem>
  </S.Container>
);

export default ToolsItems;
