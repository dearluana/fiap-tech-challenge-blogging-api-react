import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import { PostService } from '../../services/PostService';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  max-width: 500px;
  margin: auto;
   margin-top: 5rem;
   margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #000
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
  background-color:#fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border:none;
  color: #000;
   width: 90%;
       display: inline-block;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
   background-color:#fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border:none;
  color: #000;
   width: 90%;
       display: inline-block;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background: #2e7d32;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 90%;
  display: inline-block;

  &:hover {
    background: #1b5e20;
  }
`;

export function AddPost() {
  const { user, token, isProfessor } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isProfessor) return <p>Somente professores podem criar postagens.</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !token) return;

    const post = {
      title,
      content,
      authorId: user.sub,
      name: user.username,
    };


    try {
      await PostService.create(token, post);
      setTitle('');
      setContent('');
      alert('Post criado com sucesso!');
    } catch (err: any) {
      console.error('Erro ao criar post:', err);
      alert('Erro ao criar o post.');
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <h2>Criar Postagem</h2>
      <Input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Conteúdo"
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Publicar</Button>
    </Form>
  );
}
