import React from "react";
import "./Home.styles.css";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="principal">
          <h1>Hospede seu website na nuvem com segurança e performance</h1>
        </div>

        <div className="menor">
          <h3>
            Com a nossa solução cloud, temos a tecnolocia X de segurança de
            dados e processadores de última geração para que seu site nunca te
            deixe na mão
          </h3>
        </div>

        <button className="invest-button">Invista Agora</button>
      </div>
      <div className="footer">
        <div className="caixa-esquerda">
          <h2>Desenvolva seu potencial</h2>
          <h3>Alcance mais pessoas com um servidor rápido e seguro!</h3>
        </div>

        <div className="caixa-direita">
          <h2>Atraia mais usuários</h2>
          <h3>
            Nossa hospedagem torna a navegação mais democrática e acessível!
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
