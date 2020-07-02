import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import iconLogo from '../../assets/iconLogo.svg';
export let processos = [];

export default function RegisterRR() {
  const [process, setProcess] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [duration, setDuration] = useState('');
  const [quantum, setQuantum] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const history = useHistory();

  function handleRR(e) {
    e.preventDefault();
    let processo = {    
      process,
      entryTime,
      duration,
      quantum,
      prioridade
    };
    processos.push(processo)
    history.push('/roundrobin');
  }

  return (
    <div className="new-rr-container">
      <div className="content">
        <section>
          <img src={iconLogo} alt="Icon"/>
          <p className="title">Cadastrar novo processo</p>
          <p className="description">Preencha todos os campos para adicionar um processo Round Robin.</p>
          <Link className="back-link" to="/roundrobin">
            <FiArrowLeft size={16} color="#C62E65" />
            Voltar para o gráfico
          </Link>
        </section>
        <form onSubmit={handleRR}>
          <input 
            placeholder="Processo"
            value={process}
            onChange={e => setProcess(e.target.value)} 
          />
          <input 
            placeholder="Tempo de Ingresso"
            value={entryTime}
            onChange={e => setEntryTime(e.target.value)} 
          />
          <input 
            placeholder="Duração"
            value={duration}
            onChange={e => setDuration(e.target.value)} 
          />
          <input 
            placeholder="Quantum"
            value={quantum}
            onChange={e => setQuantum(e.target.value)} 
          />
          <input 
            placeholder="Prioridade"
            value={prioridade}
            onChange={e => setPrioridade(e.target.value)} 
          />
          <button className="button" type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}