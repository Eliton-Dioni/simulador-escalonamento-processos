import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import iconLogo from '../../assets/iconLogo.svg';

export default function RegisterSJF() {
  const [name, setName] = useState('');
  const [entry_time, setEntryTime] = useState('');
  const [duration, setDuration] = useState('');
  const history = useHistory();

  async function handleAddSjf(e) {
    e.preventDefault();
    
    const response = await api.post('/processos', {
      name,
      entry_time,
      duration,
    })

    setName('');
    setEntryTime('');
    setDuration('');
    
    history.push('/sjf');
  }

  return (
    <div className="new-sjf-container">
      <div className="content">
        <section>
          <img src={iconLogo} alt="Icon"/>
          <p className="title">Cadastrar novo processo</p>
          <p className="description">Preencha todos os campos para adicionar um processo SJF.</p>
          <Link className="back-link" to="/sjf">
            <FiArrowLeft size={16} color="#C62E65" />
            Voltar para o gráfico
          </Link>
        </section>
        <form onSubmit={handleAddSjf}>
          <input 
            placeholder="Processo"
            value={name}
            onChange={e => setName(e.target.value)} 
          />
          <input 
            placeholder="Tempo de Ingresso"
            value={entry_time}
            onChange={e => setEntryTime(e.target.value)} 
          />
          <input 
            placeholder="Duração"
            value={duration}
            onChange={e => setDuration(e.target.value)} 
          />
          <button className="button" type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  )
}