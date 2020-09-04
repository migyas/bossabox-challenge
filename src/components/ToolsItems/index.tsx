import React, {useState} from 'react';

import * as S from './styled';
import Text from '../Text';
import ModalRemoveTool from '../ModalRemoveTool';

interface ITool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface IProps {
  tool: ITool;
  isOpen: boolean;
  setIsOpen: () => void;
  handleDelete: (id: number) => {};
}

const ToolsItems: React.FC<IProps> = ({tool, isOpen, setIsOpen, handleDelete}) => {

  return (
    <S.Container>
      <S.SearchItem>
        <S.Button type="button" onClick={setIsOpen}>Remover</S.Button>
        {!!open && <ModalRemoveTool tool={tool} isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={handleDelete} />}
        <Text component="h2" modifiers={['header4', 'margMedium']}>
          <a href={tool.link} target="no_blank">{tool.title}</a>
        </Text>
        <Text component="p" modifiers={['body', 'margSmall']}>
          {tool.description}
        </Text>

        <S.SearchTags>
          {tool.tags}

          {/* {`#${tool.tags}`} */}
          {/* <Text component="p" modifiers={['body']}>
            &nbsp;&nbsp;{tool.tags[0] && '#'}&nbsp;{tool.tags[0]}
          </Text>
          <Text component="p" modifiers={['body']}>
            &nbsp;&nbsp;{tool.tags[1] && '#'}&nbsp;{tool.tags[1]}
          </Text>
          <Text component="p" modifiers={['body']}>
            &nbsp;&nbsp;{tool.tags[2] && '#'}&nbsp;{tool.tags[2]}
          </Text>
          <Text component="p" modifiers={['body']}>
            &nbsp;&nbsp;{tool.tags[3] && '#'}&nbsp;{tool.tags[3]}
          </Text>
          <Text component="p" modifiers={['body']}>
            &nbsp;&nbsp;{tool.tags[4] && '#'}&nbsp;{tool.tags[4]}
          </Text>
          <Text component="p" modifiers={['body']}>
            &nbsp;&nbsp;{tool.tags[5] && '#'}&nbsp;{tool.tags[5]}
          </Text> */}
        </S.SearchTags>
      </S.SearchItem>
    </S.Container>
  );
};
export default ToolsItems;
