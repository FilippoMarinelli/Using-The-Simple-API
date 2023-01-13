import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData();
  }, []);

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'botao_clicado',
    });
  }

  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <Paragrafo>Lorem ipsun</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
