/* 1. Componente de Saudação
Crie um componente chamado Saudacao que receba uma prop nome e exiba "Olá, {nome}" na tela.
Objetivo: Praticar a passagem e utilização de props em componentes funcionais. */

import React from 'react';

function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

export default Saudacao;