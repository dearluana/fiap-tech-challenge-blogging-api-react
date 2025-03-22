import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.li`
  font-size: 1.2rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #4caf50;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Header: React.FC<HeaderProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem><NavLink href="/dashboard">Dashboard</NavLink></NavItem>
          <NavItem><NavLink href="/adicionar-post">Adicionar Post</NavLink></NavItem>
        </NavList>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
