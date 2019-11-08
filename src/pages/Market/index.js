import React from 'react';
import { Link } from 'react-router-dom';

import extra from '../../assets/markets/extra.png';
import assai from '../../assets/markets/assai.png';
import big from '../../assets/markets/big.png';

import './styles.css';

export default function Market() {
  return (
    <>
      <div className="market">

        <div className="markets">
          <img src={extra} alt="Logo Empresa"/>
          <p> Extra </p>
          <span>1km de distância</span>

          <Link to='/marketview'>
            <button className="mk-button"> Entrar </button>
          </Link>
        </div>

        <div className="markets">
          <img src={assai} alt="Logo Empresa"/>
          <p> Assaí </p>
          <span>2km de distância</span>

          <Link to='/marketview'>
            <button className="mk-button"> Entrar </button>
          </Link>
        </div>

        <div className="markets">
          <img src={big} alt="Logo Empresa"/>
          <p> Big Supermercados </p>
          <span>3km de distância</span>

          <Link to='/marketview'>
            <button className="mk-button"> Entrar </button>
          </Link>
        </div>
      </div>
    </>
  );
}
