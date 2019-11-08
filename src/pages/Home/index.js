import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/market.png';

import './styles.css';

export default function Home() {
  return (
    <>
      <img src={logo} id="market" style={{ height: 400}} alt="Market Insight"/>

      <div className="mk">
        <h1 style={{ fontWeight: 400 }}>
          Na sua casa ou em qualquer lugar,
        </h1>
        <span>Compre já!</span>
      </div>

      <Link to='/market'>
        <button className="btn" style={{ marginLeft: 250 }}> Supermercados</button>
      </Link>
    </>
  );
}
