import React, { CSSProperties } from 'react';
import * as S from './styled';

interface TextProps {
  component?: any;
  modifiers?: string[];
  style?: CSSProperties;
  children: string;
}
const Text: React.FC<TextProps> = ({
  component,
  modifiers,
  children,
  style,
}) => {
  const TextComponent = component ? S.Text.withComponent(component) : S.Text;
  return (
    <TextComponent modifiers={modifiers} style={style}>
      {children}
    </TextComponent>
  );
};
export default Text;
