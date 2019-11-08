import React from 'react';
import './App.css';

import logo from './assets/logotonolucro.png';

import Routes from './routes';

function App() {
  return (
    <div className="container">

      <div className="header">
        <a href='/'>
          <img src={logo} style={{ height: 40, marginLeft: 20 }} alt="Logo ToNoLucro"/>
        </a>
        <h6 style={{ marginLeft: 70, fontWeight: 400 }}>
          RESTAURANTES
        </h6>

        <h6 style={{ marginLeft: 70, fontWeight: 400 }}>
          PRATOS DO DIA
        </h6>

        <h6 style={{ marginLeft: 70, fontWeight: 400 }}>
          SUPERMERCADOS
        </h6>

        <h6 style={{ marginLeft: 320, fontWeight: 400 }}>
          ENTRAR
        </h6>

        <h6 style={{ marginLeft: 40, fontWeight: 400 }}>
          CADASTRE-SE
        </h6>
      </div>

      <div className="content">
        <Routes />
      </div>

    </div>
  );
}

export default App;
