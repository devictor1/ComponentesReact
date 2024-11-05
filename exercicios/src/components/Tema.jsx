/*3. Componente de Alternância de Tema ou Componente "Toggle Tema"
Crie um componente Tema com um botão que alterne entre "Tema Claro" e "Tema Escuro".
Dependendo do estado, altere o fundo da página para branco ou preto.
Objetivo: Manipular estado e aplicar estilos condicionais com base no estado.
 */

import React, { useState } from 'react';

function ToggleTema() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <p>{isDark ? 'Tema Escuro' : 'Tema Claro'}</p>
      <button onClick={toggleTheme}>
        Alternar para {isDark ? 'Claro' : 'Escuro'}
      </button>
    </div>
  );
}

export default ToggleTema;
