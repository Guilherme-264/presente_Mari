import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import Carrossel from './components/Carrossel'
import Contador from './components/Contador'
import HeartsBackground from './components/HeartsBackground'
import Textinho from './components/textinho'

function App() {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center m-0">
            <HeartsBackground />

        {!mostrar && (
          <div>
            <Botao exibirCoisas={() => setMostrar(true)}/>
          </div>
        )}

        {mostrar &&(
          <div>
            <Carrossel />
            <Contador />
            {/* <Textinho /> */}

          </div>
        )}


        
    </div>
  )
}

export default App
