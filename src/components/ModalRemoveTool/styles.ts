import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  button {
    margin-top: 2.8rem;
  }

  span {
    margin-top: 1rem;
    }
  }

  button {
    display: flex;
    font-weight: 600;
    border-radius: 5px;
    border: 0;
    background: #365DF0;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      font-size: 1.8rem;
      font-weight: normal;
      padding: 16px 24px;
      margin: 0 auto;
    }
  }

  .yes {
    background-color: #F95E5A;
  }
`;
