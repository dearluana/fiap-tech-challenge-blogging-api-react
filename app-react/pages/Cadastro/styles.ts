import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
`;


export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento entre os campos */
`;

export const Input = styled.input`
  width: auto;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #45a049;
  }

  &:active {
    background: #388e3c;
  }
`;

export const HandleBackLink = styled.div`
  text-align: center;
`;

export const BackButton = styled.a`
  color: #4caf50;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #45a049;
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;

  input {
    margin-right: 0.5rem;
     width:20px;
  height:20px;
  }
`;
