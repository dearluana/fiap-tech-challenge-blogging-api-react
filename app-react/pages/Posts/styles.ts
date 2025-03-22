import styled from 'styled-components';


export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

export const PostItem = styled.li`
  background: #f5f5f5;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;

  h3 {
    margin: 0 0 8px 0;
  }

  p {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;