import styled from 'styled-components';

import arrDown from '../../assets/chevron-arrow.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 5px solid #fcfcfd;
  max-height: 8rem;
  margin-bottom: 10rem;
  width: 100%;
  border-bottom: 1px solid #0000001a;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    width: 3rem;
    height: 3.5rem;
    margin: 3.5rem;
    margin-right: 7rem;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 3.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  button {
    border: none;
    background-image: url(${arrDown});
    background-size: 100% cover;
    background-repeat: no-repeat;
    background-color: transparent;
    width: 3rem;
    height: 1rem;
    margin-right: 2.5rem;
    margin-left: 1.8rem;
  }
`;
