/* 4. Formulário de Cadastro
Construa um componente Cadastro com campos de texto para nome, email e senha. Adicione um botão "Enviar" que exiba um alerta mostrando os dados preenchidos.
Objetivo: Manipular entradas de formulários e trabalhar com o estado de múltiplos campos.
*/

import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Cadastro;
