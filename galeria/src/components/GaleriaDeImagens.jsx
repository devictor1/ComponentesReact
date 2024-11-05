import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://loremflickr.com/150/150?random=1',
    'https://loremflickr.com/150/150?random=2',
    'https://loremflickr.com/150/150?random=3'
  ]);
  const [random, setRandom] = useState(4);
  const [carregando, setCarregando] = useState(Array(imagens.length).fill(true));

  const adicionarImagem = () => {
    const novaImagem = 'https://loremflickr.com/150/150?random=' + random;
    setImagens([...imagens, novaImagem]);
    setCarregando([...carregando, true]);
    setRandom(random + 1);
  };

  const removerImagem = (index) => {
    setImagens(imagens.filter((_, i) => i !== index));
    setCarregando(carregando.filter((_, i) => i !== index)); 
  };

  const handleImageLoad = (index) => {
    const newLoadingState = [...carregando];
    newLoadingState[index] = false;
    setCarregando(newLoadingState);
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <div key={index} style={{ margin: '5px' }}>
            <img 
              src={imagem} 
              alt={`Imagem ${index + 1}`} 
              onLoad={() => handleImageLoad(index)}
              style={{ display: carregando[index] ? 'none' : 'block' }}
            />
            {carregando[index] && (
              <img 
                src="https://via.placeholder.com/150" 
                alt="Carregando..." 
                style={{ display: 'block' }}
              />
            )}
            <button onClick={() => removerImagem(index)}>Remover</button>
          </div>
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens;