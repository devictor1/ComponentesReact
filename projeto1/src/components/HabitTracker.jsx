import { useState } from 'react'

function HabitTracker(){
    const [habitos, setHabitos] = useState([]);
    const [novoHabito, setNovoHabito] = useState("");
    const criarHabito = () => {
        setHabitos([...habitos, novoHabito]);
        setNovoHabito('');
    }
    const deletarHabito = (index) => {
        const novosHabitos = [...habitos];
        novosHabitos.splice(index, 1);
        setHabitos(novosHabitos);
    }

return (
    <>
    <h2>Lista de Hábitos</h2>
    <input
    type="text"
    value={novoHabito}
    onChange={(e) => setNovoHabito(e.target.value)}
    placeholder="Adicione um novo Hábito"
    />
    <button onClick={criarHabito}>Criar Novo Hábito</button>
    <ul>{habitos.map((habitos, index) => (
        <li key={index}>
        {habitos}{' '}
        <button onClick={() => deletarHabito(index)}>Deletar Hábito</button>
        </li>
    ))}
    </ul>
    </>
);
}

export default HabitTracker