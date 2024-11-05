import './App.css'
import Cadastro from './components/Cadastro'
import Contador from './components/Contador'
import Saudacao from './components/Saudacao'
import ToggleTema from './components/Tema'

function App() {

  return (
    <>
      <Saudacao nome="Jason"/>
      <Contador/>
      <ToggleTema/>
      <Cadastro/>
    </>
  )
}

export default App
