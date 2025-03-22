import { useState } from 'react';
import api from "../../services/api";
import { useNavigate, Link } from 'react-router-dom';
import { Wrapper, Container, Title, Form, Input, Button, ErrorMessage, CheckboxLabel, HandleBackLink, BackButton } from './styles';

export default function Register() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [professor, setProfessor] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const personResponse = await api.post('/person', {
                name,
                surname,
                email,
                professor,
            });

            const personId = personResponse.data.id;

            const userResponse = await api.post('/user', {
                username,
                password,
                person: {
                    name,
                    surname,
                    email,
                    professor,
                    id: personId,
                },
            });
            if (userResponse.status === 201) {
                console.log('Usuário criado com sucesso:', userResponse.data);

                navigate('/login');
            } else {
                setError('Erro ao criar o usuário.');
            }
        } catch (err) {
            console.error('Erro ao registrar:', err);
            setError('Erro ao criar conta.');
        }
    };

    return (
        <Wrapper>
            <Container>
                <Title>Cadastro</Title>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Form onSubmit={handleRegister}>
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Sobrenome"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Nome de usuário"
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
                    <CheckboxLabel>
                        <input
                            type="checkbox"
                            checked={professor}
                            onChange={(e) => setProfessor(e.target.checked)}
                        />
                        Professor
                    </CheckboxLabel>
                    <Button type="submit">Cadastrar</Button>
                    <HandleBackLink>
                        <BackButton as={Link} to="/login">Voltar ao Login</BackButton>
                    </HandleBackLink>
                </Form>
            </Container>
        </Wrapper>
    );
}
