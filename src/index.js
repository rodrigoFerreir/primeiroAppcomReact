import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Entrada, Rodando e Fim.
  const [estado, setEstado] = useState("ENTRADA");

  //Palpite:
  const [palpite, setPalpite] = useState(150);
  const [nmrPalpites, setNmrPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNmrPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }

  const menor = () => {
    setNmrPalpites(nmrPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNmrPalpites(nmrPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return [
      <div>
        <p>
          Acertou o numero {palpite}, com {nmrPalpites} tentativas.
        </p>
        <button onClick={iniciarJogo}>Começar denovo</button>
      </div>
    ];
  }

  //Palpite que a maquina deu
  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
