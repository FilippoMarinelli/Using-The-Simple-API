import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(
    (state) => state.exampleReducer.botaoClicado
  );

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="ovo">
        <FaUserAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
