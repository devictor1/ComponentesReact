/* 2. Componente de Contador
Desenvolva um componente Contador que tenha um estado inicial de zero e dois botões: "Incrementar" e "Decrementar". O número exibido deve ser atualizado conforme os botões são clicados.
Objetivo: Manipular o estado (state) e eventos de clique.*/

import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;