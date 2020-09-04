import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    font-size: 1.6rem;
    padding: 1rem;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    color: #8f8a9b;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    margin-top: .5rem;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
`;

