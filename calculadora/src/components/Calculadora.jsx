import { useState } from 'react';

function Calculadora() {
    const [expressao, setExpressao] = useState('');
    const [resultado, setResultado] = useState(0);
    const [base, setBase] = useState(null);
    const [raizAtiva, setRaizAtiva] = useState(false);

    const escolha = (value) => {
        setExpressao(expressao + value);
    };

    const calcularResultado = () => {
        if (raizAtiva) {
            try {
                const expoente = parseFloat(expressao);
                if (!isNaN(expoente) && base !== null) {
                    const raiz = Math.pow(base, 1 / expoente);
                    setResultado(raiz);
                } else {
                    setResultado('Erro! Verifique o expoente.');
                }
            } catch (error) {
                setResultado('Erro');
            }
            setRaizAtiva(false);
            setBase(null);
            setExpressao('');
        } else {
            try {
                const resultadoCalculado = eval(expressao);
                setResultado(resultadoCalculado);
            } catch (error) {
                setResultado('Erro');
            }
        }
    };

    const calcularRaiz = () => {
     setBase(parseFloat(expressao));
     setExpressao('');
     setRaizAtiva(true);
    };

    const limpar = () => {
        setExpressao('');
        setResultado('');
        setBase(null);
        setRaizAtiva(false);
    };

    return (
        <>
            <h2>Calculadora Simples</h2>
            <input
                type="text"
                value={expressao}
                readOnly
                style={{ marginBottom: '10px' }}
            />
            <div>
                <button onClick={limpar} style={{ marginTop: '10px' }}>Limpar</button>
                <button onClick={calcularRaiz}>√</button>
                <button onClick={() => escolha('**')}>^</button>
            </div>
            <div>
                <button onClick={() => escolha('1')}>1</button>
                <button onClick={() => escolha('2')}>2</button>
                <button onClick={() => escolha('3')}>3</button>
                <button onClick={() => escolha('+')}>+</button>
            </div>
            <div>
                <button onClick={() => escolha('4')}>4</button>
                <button onClick={() => escolha('5')}>5</button>
                <button onClick={() => escolha('6')}>6</button>
                <button onClick={() => escolha('-')}>-</button>
            </div>
            <div>
                <button onClick={() => escolha('7')}>7</button>
                <button onClick={() => escolha('8')}>8</button>
                <button onClick={() => escolha('9')}>9</button>
                <button onClick={() => escolha('*')}>*</button>
            </div>
            <div>
                <button onClick={() => escolha('0')}>0</button>
                <button onClick={() => escolha('.')}>.</button>
                <button onClick={calcularResultado}>=</button>
                <button onClick={() => escolha('/')}>/</button>
            </div>

            <div>
                <p>Resultado: {resultado}</p>
            </div>
        </>
    );
}

export default Calculadora;