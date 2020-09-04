import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 5rem;
`;

export const Content = styled.div`
  max-width: 115rem;
  width: 100%;
`;

export const MainSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  div {

    svg {
      position: absolute;
      // color: #8f8a9b;
      color: red;
      top: 1.4rem;
      left: .5rem;
    }
  }
`;

export const MainResults = styled.div``;

export const Form = styled(Unform)`
  display: flex;
  align-items: center;
  position: relative;

  #ftext {
    max-width: 80%;
    width: 30rem;
    height: 4rem;
    font-size: 1.6rem;
    padding: 1rem 1rem 1rem 2.5rem;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    color: #8f8a9b;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    margin-right: 2rem;

    &::placeholder {
      color: #b1adb9;
    }
  }

  svg {
    position: absolute;
    color: #b1adb9;
    top: 2;
    left: 2px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #365df0;
  border-radius: 5px;
  color: #ffffff;
  max-height: 3.5rem;

  padding: 1rem 1.5rem;
  padding-left: 3rem;
  position: relative;
  transition: all 0.3s;

  &:active {
    background-color: #244aa8 !important;
    transform: translateY(2px);
  }

  &:hover {
    background-color: #2f55cc;
  }

  svg {
    position: absolute;
    top: 0.8rem;
    left: 0.5rem;
  }
`;
