import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './styles.css';
import logoImg from '../../assets/logoImg.svg';

export default function Logon() {
  const history = useHistory();

  function handleFifo() {
    history.push('/fifo');
  }

  function handleSjf() {
    history.push('/sjf');
  }

  // function handleRR() {
  //   history.push('/roundrobin');
  // }

  // function handlePrioridade() {
  //   history.push('/prioridade');
  // }

  return (
    <div className="container">
      <section className="form">
        <form>
          <h1>Simulador de Escalonamento de Processos</h1>
          <button onClick={handleFifo} className="button">FIFO</button>
          <button onClick={handleSjf} className="button">SJF</button>
          <Button variant="secondary" className="buttonDisable" disabled>ROUND ROBIN</Button>
          <Button variant="secondary" className="buttonDisable" disabled>PRIORIDADE</Button>
          {/* <button onClick={handleRR} className="button">ROUND ROBIN</button>
          <button onClick={handlePrioridade} className="button">PRIORIDADE</button> */}
        </form>
      </section>
      <img src={logoImg} alt="Logo"/>
    </div>
  );
}