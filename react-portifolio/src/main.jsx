// Importa as bibliotecas React e ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importa o componente principal da aplicação
import App from './app.jsx'
// Importa o arquivo CSS principal da aplicação
import './index.css'

// Importa as fontes utilizadas na aplicação
import "@fontsource/outfit"
import "@fontsource/roboto"

// Cria uma "raiz" React no elemento HTML com id "root" e renderiza o componente App dentro da "raiz" em modo estrito
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
