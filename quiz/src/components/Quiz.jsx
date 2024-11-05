import React, { useState } from 'react';
import './quiz.css';


const perguntas = [
  { pergunta: 'Quantos anos tem o Brasil?',
    opcoes: ['513', '179', '346', '213'],
    resposta: '213'},

  { pergunta: 'Quem descobriu o Brasil?',
    opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
    resposta: 'Pedro Álvares Cabral'},

  { pergunta: 'Qual desses planetas é o maior?',
    opcoes: ['Júpiter', 'Saturno', 'Urano', 'Netuno'],
    resposta: 'Júpiter'}
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    const novasRespostas = [...respostas, respostaSelecionada];
    setRespostas(novasRespostas);
  
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado(novasRespostas);
    }
  };
  
  const calcularResultado = (todasRespostas) => {
    let pontuacao = 0;
    
    for (let i = 0; i < perguntas.length; i++) {
      if (todasRespostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <div>
      {resultado !== null ? (
        <div>
          <h2>Resultado do Quiz</h2>
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ul>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} className="opcao" onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;