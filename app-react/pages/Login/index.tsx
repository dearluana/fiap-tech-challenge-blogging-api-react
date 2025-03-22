import { useState } from 'react';
import api from "../../services/api";
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import {
  Wrapper,
  Container,
  Title,
  Form,
  Input,
  Button,
  Subtitle,
  RegisterLink,
  RegisterButton,
  ErrorMessage,
  
} from './styles'; 

interface DecodedToken {
  sub: number;
  iat: number; 
  exp: number; 
}

interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setIsAuthenticated }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/auth', {
        username,
        password,
      });

      const { access_token } = response.data;

      localStorage.setItem('token', access_token);

      const decodedToken = jwtDecode<DecodedToken>(access_token);
      const userId = decodedToken.sub;

      const userResponse = await api.get(`/person/${userId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const { name, surname, email, professor } = userResponse.data;
      localStorage.setItem('userData', JSON.stringify({
        name,
        surname,
        email,
        professor,
        id: userId,
      }));

      setIsAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Login</Title>
        <Subtitle>Entre com seu login de aluno ou professor</Subtitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form  onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
        
        <RegisterLink>
          <RegisterButton as={Link} to="/cadastrar">Cadastre-se</RegisterButton>
        </RegisterLink>
      </Container>
    </Wrapper>
  );
}
