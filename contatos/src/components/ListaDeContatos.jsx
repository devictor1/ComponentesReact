import React, { useState } from 'react';

function ListaDeContatos() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const formatarTelefone = (telefone) => { // Remove todos os caracteres que não são dígitos
    const apenasNumeros = telefone.replace(/\D/g, ''); // Verifica o comprimento do número
    if (apenasNumeros.length === 10) { // Formata para (XX) XXXX-XXXX
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
    } else if (apenasNumeros.length === 11) { // Formata para (XX) XXXXX-XXXX
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
    }
  
    return telefone; // Retorna o telefone original se não corresponder ao formato esperado
  };
  
  const adicionarContato = () => {
    if (nome && telefone) {
      const telefoneValido = /^\d+$/.test(telefone); // Verifica se são apenas números no campo do telefone
      if (telefoneValido) {
        if (telefone.length >= 10) { // Verifica se tem mais de 10 dígitos para formatação
        const telefoneFormatado = formatarTelefone(telefone);
        setContatos([...contatos, { nome, telefone: telefoneFormatado }]);
        setNome('');
        setTelefone('');
    }  else{
            alert('Telefone deve ter no mínimo 10 dígitos (incluir DDD sem 0)');
        }
    } else {
        alert('Telefone deve ser somente números!');
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const deletarContato = (index) => { // Função para deletar um contato
    const novosContatos = [...contatos];
    novosContatos.splice(index, 1);
    setContatos(novosContatos);
}
const listaOrdenada = [...contatos].sort((a, b) => // Função para ordenar a lista de contatos em ordem alfabética
    a.nome > b.nome ? 1 : -1,
  );

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <div>
        <input // Criando o campo para inserir o nome
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <br/>
        <input  // Criando o campo para inserir o telefone
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
        />
        <br/>
        <button // Botão para adicionar o contato
        onClick={adicionarContato}>Adicionar Contato</button> 
      </div>
      <ul>
        {listaOrdenada.map((contato, index) => ( // Criação da lista de contatos ordenada usando map
          <li key={index}>
            <strong>Nome: </strong>{contato.nome}  - <strong>Telefone: </strong>{contato.telefone}<>  </>
            <button // Botão para deletar contato
            onClick={deletarContato}>Deletar Contato</button>
            <br/><br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos; // Exportação da função