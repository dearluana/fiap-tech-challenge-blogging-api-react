import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface Post {
  id: number;
  title: string;
  content: string;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          alert('Token inválido ou expirado. Faça login novamente.');
          navigate('/');
        }
      } catch (err) {
        console.error('Erro ao buscar posts', err);
      }
    };

    fetchPosts();
  }, [navigate]);

  return (
    <S.Container>
      <h2>Posts</h2>
      <S.PostList>
        {posts.map((post) => (
          <S.PostItem key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </S.PostItem>
        ))}
      </S.PostList>
    </S.Container>
  );
}

export default Posts;
