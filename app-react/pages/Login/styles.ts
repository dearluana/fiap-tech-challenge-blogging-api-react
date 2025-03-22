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
  font-size: 2rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento entre os campos */
`;

export const Input = styled.input`
  width: auto;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #45a049;
  }
`;

export const Subtitle = styled.p`
  display: flex;
  text-align:center;
  color:#000;
  justify-content: center;
  margin-top: 0px;
`;

export const RegisterLink = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const RegisterButton = styled.a`
  color: #4caf50;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #45a049;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;
