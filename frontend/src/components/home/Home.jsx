import React from 'react';
import Main from '../templates/Main';

export default (props) => (
  <Main
    icon="home"
    title="Inicio"
    subtitle="Primeiro Projeto desenvolvido com ReactJS"
  >
    <div className="display-4">Bem vindo</div>
    <hr />
    <p className="mb-0">
      Sistema para por em pratica a construção de um cadastro desenvolvido com
      ReactJs
    </p>
  </Main>
);
