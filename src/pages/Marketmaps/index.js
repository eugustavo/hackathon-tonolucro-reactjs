import React from 'react';

import hortiview from '../../assets/maps/hortimaps.PNG';

import './styles.css';

export default function Marketmaps() {
  return (
    <>
      <div className="marketmaps">
        <div className="pesquisar">
          <input type="text" placeholder="Pesquisar hortifruti..."/>
        </div>
        
        <div className="contentproduct">
          
          <div className="maps">
            <h5>Próxima atualização: 15 minutos... (última atualização feita há 1 hora atrás)</h5>
            <img src={hortiview} alt=""/>
          </div>
          
          <div className="carinho">
            <h2>Carrinho</h2>
            <div className="line" />
            
            <div className="carrinhoprod">
              <h5>► Manga</h5>
              <input type="number" value="3" />
            </div>
            
            <div className="obs">
              <textarea name="Observações..." id="textarea" cols="30" rows="3" placeholder="Observações sobre o produto..."></textarea>
            </div>
            
            <div className="line" />
            <div className="descricao">
              <h5> ► Extra Hipermecado</h5>
              <h5> ► Tempo de entrega: 31-45 min</h5>
            </div>
            <div className="descricao2">
              <h5>► 3xManga</h5>
              <h6>R$ 2.67</h6>              
            </div>
            <div className="descricao3">
              <h5>► Total</h5>
              <h6>R$ 2.67</h6>              
            </div>
            <button className="button-finalizar">Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </>
  );
}
