import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [centesimos, setCentésimos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    let intervalo;
    if (iniciado) {
      intervalo = setInterval(() => {
        setCentésimos((centésimos) => centésimos + 1);
      }, 10);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [iniciado]);

  const iniciarCronometro = () => {
    setIniciado(true);
  };

  const pausarCronometro = () => {
    setIniciado(false);
    const tempoAtual = `${horas < 10 ? `0${horas}` : horas}:${minutos < 10 ? `0${minutos}` : minutos}:${segundos < 10 ? `0${segundos}` : segundos}.${centesimos < 10 ? `0${centesimos}` : centesimos}`;
    setHistorico([...historico, tempoAtual]);
  };
  const limparHistorico = () => {
    setHistorico([]);
  }

  const zerarCronometro = () => {
    setCentésimos(0);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setIniciado(false);
  };

  useEffect(() => {
    if (centesimos === 100) {
      setCentésimos(0);
      setSegundos(segundos + 1);
    }
    if (segundos === 60) {
      setSegundos(0);
      setMinutos(minutos + 1);
    }
    if (minutos === 60) {
      setMinutos(0);
      setHoras(horas + 1);
    }
  }, [centesimos, segundos, minutos, horas]);

  return (
    <div>
      <h2>Cronômetro</h2>
      <div>
        <span>{horas < 10 ? `0${horas}` : horas}</span>:
        <span>{minutos < 10 ? `0${minutos}` : minutos}</span>:
        <span>{segundos < 10 ? `0${segundos}` : segundos}</span>:
        <span>{centesimos < 10 ? `0${centesimos}` : centesimos}</span>
      </div>
      <div>
        {!iniciado ? (
          <button onClick={iniciarCronometro}>Iniciar</button>
        ) : (
          <button onClick={pausarCronometro}>Pausar</button>
        )}
        <button onClick={zerarCronometro}>Zerar</button>
      </div>
       <h3>Histórico</h3>
      <button // Botão para limpar o histórico
        onClick={limparHistorico}>Limpar Histórico</button>
      <ul>
        {historico.map((tempo, index) => (
          <li key={index}>{tempo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cronometro;