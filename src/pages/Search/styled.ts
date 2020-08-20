import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 110rem;
  margin: 0 auto;
`;

export const Content = styled.div``;

export const MainSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container {
    display: block;
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 1rem;
    left: -0.5rem;
    height: 18px;
    width: 18px;
    border-radius: 3px;
    background-color: #f5f4f6;
    border: 1px solid #dedce1;
    transition: all 0.3s;
  }

  .checktext {
    display: inline-block;
    font-size: 1.6rem;
    padding-top: 0.9rem;
  }

  .container:hover input ~ .checkmark {
    background-color: #dedce1;
  }

  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 0;
    left: 0.5rem;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 1.5px 1.5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const MainResults = styled.div``;

export const Form = styled.div`
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
