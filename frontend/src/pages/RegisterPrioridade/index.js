import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import iconLogo from '../../assets/iconLogo.svg';
export let processos = [];

export default function RegisterPrioridade() {
  const [process, setProcess] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [duration, setDuration] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const history = useHistory();

  function handlePrioridade(e) {
    e.preventDefault();
    let processo = {    
      process,
      entryTime,
      duration,
      prioridade
    };
    processos.push(processo)
    history.push('/prioridade');
  }

  return (
    <div className="new-prioridade-container">
      <div className="content">
        <section>
          <img src={iconLogo} alt="Icon"/>
          <p className="title">Cadastrar novo processo</p>
          <p className="description">Preencha todos os campos para adicionar um processo Prioridade FIFO.</p>
          <Link className="back-link" to="/prioridade">
            <FiArrowLeft size={16} color="#C62E65" />
            Voltar para o gráfico
          </Link>
        </section>
        <form onSubmit={handlePrioridade}>
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