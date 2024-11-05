import React, { useState } from 'react';
import './BuscaDeFilmes.css'

function BuscaDeFilmes() {
  const [query, setQuery] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState('');
  const [page, setPage] = useState(1);

  const buscarFilmes = async (page = 1) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=a2037688&page=${page}`); 
      const data = await response.json();
      if (data.Response === 'True' && data.Search) {
        const filmesOrdenados = data.Search.sort((a, b) => {
          return parseInt(a.Year) - parseInt(b.Year);
        });
        setFilmes(filmesOrdenados);
        setErro('');
      } else {
        setFilmes([]);
        setErro(data.Error || 'Erro desconhecido');
      }
    } catch (error) {
      setFilmes([]);
      setErro('Erro ao buscar filmes: ' + error.message);
    }
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarFilmes();
  };
  const handleNext = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await buscarFilmes(nextPage);
  };
  
  const handlePrevious = async () => {
    if (page > 1) { 
      const prevPage = page - 1;
      setPage(prevPage);
      await buscarFilmes(prevPage); 
    }
  };

  return (
    <div>
      <h2>Busca de Filmes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Digite o nome do filme"
        />
        <button type="submit">Buscar</button>
        <button onClick={handleNext}>Próxima Página</button>
        <button onClick={handlePrevious}>Página Anterior</button>
      </form>
      {erro && <p>{erro}</p>}
      <div className='filmesOrdenados'>
  {filmes.map((filme) => (
    <div key={filme.imdbID} className='filmes'>
      <h3>{filme.Title}</h3>
      <a href={`https://www.imdb.com/title/${filme.imdbID}`} target="_blank" rel="noopener noreferrer">
        <img src={filme.Poster} alt={filme.Title} height={300} />
      </a>
    </div>
  ))}
</div>
    </div>
  );
}

export default BuscaDeFilmes;