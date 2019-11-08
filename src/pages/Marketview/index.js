import React from 'react';
import { Link } from 'react-router-dom';

import horti from '../../assets/sections/hortifruit.png';
import acougue from '../../assets/sections/acougue.jpg';
import massas from '../../assets/sections/massas.jpg';

import './styles.css';

export default function Marketview() {
  return (
    <>
      <h1 id="section"> Seções </h1>
      <div className="market">
        <div className="markets">
          <img src={horti} alt="Logo Empresa"/>
          <p> Hortifruti </p>
          <span>Legumes, verduras, frutas...</span>

          <Link to='/marketmaps'>
            <button className="mk-button" > Visualizar </button>
          </Link>
        </div>

        <div className="markets">
          <img src={acougue} alt="Logo Empresa"/>
          <p> Açougue </p>
          <span>Carne, frango e linguiça...</span>

          <Link to='/marketmaps'>
            <button className="mk-button"> Visualizar </button>
          </Link>
        </div>

        <div className="markets">
          <img src={massas} alt="Logo Empresa"/>
          <p> Massas </p>
          <span>Macarrão, tagliatelle, capeletti...  </span>

          <Link to='/marketmaps'>
            <button className="mk-button"> Visualizar </button>
          </Link>
        </div>
      </div>
    </>
  );
}
