// frontend/src/App.js
import React from 'react';
import Chatbot from './components/Chatbot';
import './App.css'; // Importar App.css

function App() {
  return (
    <div className="App">
      <h1>Sistema Experto "Cultivos de Plantas"</h1>
      <Chatbot />
    </div>
  );
}

export default App;
