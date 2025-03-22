import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard/Dashboard';
import Cadastro from './pages/Cadastro';
import { AddPost } from './components/AddPost/AddPost';
import Header from './components/Header/Header';  

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {!isLoginPage && isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adicionar-post" element={<AddPost />} />
          <Route path="/cadastrar" element={<Cadastro />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
