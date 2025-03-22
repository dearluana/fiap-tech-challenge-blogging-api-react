import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import styled from 'styled-components';

interface JwtPayload {
  sub: number;
  username: string;
  admin: boolean;
  exp: number;
  iat: number;
}

interface Person {
  id: number;
  name: string;
  surname: string;
  email: string;
  professor: boolean;
}

interface Post {
  id: number;
  title: string;
  content: string;
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: .5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
`;

const PostList = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow-y: scroll;
          height: 700px;
   @media (max-width: 1200px) {
    width: 80%;
  }
`;

const PostItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const PostContent = styled.p`
  color: #555;
  font-size: 1rem;
`;

const Pagination = styled.div`
  margin-top: 20px;
  color:#fff
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    color:#838383;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #4caf50;   
    
  }
`;

export default function Dashboard() {
  const [person, setPerson] = useState<Person | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const decoded = jwtDecode<JwtPayload>(token);
    const userId = decoded.sub;

    axios
      .get(`http://localhost:3000/person/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar pessoa:', error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios
      .get('http://localhost:3000/post?limit=200&page=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar posts:', error);
      });
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (!person) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <WelcomeMessage>Bem-vindo, Professor(a) {person.name}!</WelcomeMessage>

      {person.professor ? (
        <Wrapper>
          <SectionTitle>Postagens</SectionTitle>
          <PostList>
            {currentPosts.map((post) => (
              <PostItem key={post.id}>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
              </PostItem>
            ))}
          </PostList>
        </Wrapper>
      ) : (
        <Wrapper>
          <SectionTitle>Visão do Aluno</SectionTitle>
          <PostList>
            {currentPosts.map((post) => (
              <PostItem key={post.id}>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
              </PostItem>
            ))}
          </PostList>
          
        </Wrapper>
      )}

{totalPages > 1 && (
        <Pagination>
          <PageButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </PageButton>
          <span>{`Página ${currentPage} de ${totalPages}`}</span>
          <PageButton
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </PageButton>
        </Pagination>
      )}

      
    </Container>
  );
}