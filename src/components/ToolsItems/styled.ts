import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
`;

export const SearchItem = styled.div`
  padding: 2rem 2.5rem;
  background-color: #ffffff;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
`;

export const Button = styled.button`
  border: none;
  background-color: #f95e5a;
  border-radius: 5px;
  color: #ffffff;
  max-height: 3.5rem;
  max-width: 10rem;
  align-self: flex-end;

  padding: 0.5rem 1.5rem;
  position: relative;
  transition: all 0.3s;

  &:active {
    background-color: #a53f3f !important;
    transform: translateY(1px);
  }

  &:hover {
    background-color: #cc4c4c;
  }
`;
