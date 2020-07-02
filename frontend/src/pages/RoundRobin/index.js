import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { processos } from '../RegisterRR/index';
import './styles.css';
import iconLogo from '../../assets/iconLogo.svg';

export default function RounRobin() {
  const history = useHistory();
  const [listProcess, setListProcess] = useState(processos);

  function handleBack() {
    history.push('/');
  }

  function handleNew() {
    history.go();
  }

  function handleDeleteProcess(process) {
    const newProcess = listProcess.filter((processo) => processo.process !== process);
    setListProcess(newProcess);
  }

  return (
    <div className="rr-container">
      <header>
        <img src={iconLogo} alt="Logo"/>
        <h2>Algoritmo Round Robin</h2>
        <Link className="button" to="/registerround/new">Adicionar Processo</Link>
        <button type="button" onClick={handleBack}>
          <FiPower size={18} color="#C62E65" />
        </button>
      </header>

      <h1>Processos Atuais</h1>
      <ul>
        {processos.map(processo => (
          <li key={processo.process}>
            <strong>PROCESSO:</strong>
            <p>{processo.process}</p>
            <strong>TEMPO DE INGRESSO:</strong>
            <p>{processo.entryTime}</p>
            <strong>DURAÇÃO:</strong>
            <p>{processo.duration}</p>
            <strong>QUANTUM:</strong>
            <p>{processo.quantum}</p>
            <strong>PRIORIDADE:</strong>
            <p>{processo.prioridade}</p>
            
            <button onClick={() => handleDeleteProcess(processo.process)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
      <footer>
        <Link type="button" className="button" onClick={handleNew} to="/roundrobin">Nova Consulta</Link>
        <Link className="button" to="/">Montar Gráfico</Link>
      </footer>
  </div>
  );
}