import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import devLogo from '../../assets/dev.svg';
import api from '../../services/api';
import { Chart } from "react-google-charts";

export default function SJF() {
  const [processos, setProcessos] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadProcessos() {
      const response = await api.get('/processos'); 

      setProcessos(response.data);
    }

    loadProcessos();
  }, []);

  function handleBack() {
    history.push('/');
  }



  useEffect(() => {
    async function loadProcessosSJF() {
      const response = await api.get("/processoSJF");

      setProcessos(response.data);
      console.log(response.data);
    }
    
    loadProcessosSJF();
  }, []);

  function logica() {
    var array;
    for(let i in 10) {
      array[i]= processos.map()
    }
    console.log("array", array);
    return array;
  }
  logica();
  async function handleDeleteProcess(_id) {
    try {
      await api.delete(`processos/${_id}`);

      setProcessos(processos.filter(processo => processo._id !== _id));
    } catch (err) {
      alert('Erro ao deletar o processo, tente novamente.');
    }
  }

  return (
    <div className="sjf-container">
      <header>
        <img src={devLogo} alt="Logo"/>
        <h2>Algoritmo SJF</h2>
        <Link className="button" to="/registersjf/new">Adicionar Processo</Link>
        <button type="button" onClick={handleBack}>
          <FiPower size={18} color="#C62E65" />
        </button>
      </header>

      <h1>Processos Atuais</h1>
      <ul>
        {processos.map(processo => (
          <li key={processo._id}>
            <strong>PROCESSO:</strong>
            <p>{processo.name}</p>
            <strong>TEMPO DE INGRESSO:</strong>
            <p>{processo.entry_time}</p>
            <strong>DURAÇÃO:</strong>
            <p>{processo.duration}</p>

            <button onClick={() => handleDeleteProcess(processo._id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
      <footer>
        {/* <Link type="button" className="button" onClick={handleNew} to="/fifo">Nova Consulta</Link> */}
        <Link className="button" to="/">Montar Gráfico</Link>
      </footer>
      <div>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="Timeline"
          loader={<div>Carregando Gráfico</div>}
          data={[
            [
              { type: 'string', id: 'Name' },
              { type: 'string', id: 'Duration' },
              { type: 'number', id: 'Entry_Time' },
              { type: 'number', id: 'Out_Time' },
            ],
            ['A', 'Duração: 4', 0, 4],
            ['B', 'Duração: 12', 5, 16],
            ['C', 'Duração: 8', 17, 24],
            ['D', 'Duração: 10', 25, 34],
          ]}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
  </div>
  );
}