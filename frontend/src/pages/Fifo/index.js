import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import iconLogo from "../../assets/iconLogo.svg";

export default function Fifo() {
  const [processos, setProcessos] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadProcessos() {
      const response = await api.get("/processos");

      setProcessos(response.data);
    }

    loadProcessos();
  }, []);

  function handleBack() {
    history.push("/");
  }

  useEffect(() => {
    async function loadProcessosFifo() {
      const response = await api.get("/processoFifo");

      setProcessos(response.data);
      console.log(response.data);
    }
    
    loadProcessosFifo();
  }, []);

  async function handleDeleteProcess(_id) {
    try {
      await api.delete(`processos/${_id}`);

      setProcessos(processos.filter((processo) => processo._id !== _id));
    } catch (err) {
      alert("Erro ao deletar o processo, tente novamente.");
    }
  }

  return (
    <div className="fifo-container">
      <header>
        <img src={iconLogo} alt="Logo" />
        <h2>Algoritmo FIFO</h2>
        <Link className="button" to="/registerfifo/new">
          Adicionar Processo
        </Link>
        <button type="button" onClick={handleBack}>
          <FiPower size={18} color="#C62E65" />
        </button>
      </header>

      <h1>Processos Atuais</h1>
      <ul>
        {processos.map((processo) => (
          <li key={processo._id}>
            <strong>PROCESSO:</strong>
            <p>{processo.name}</p>
            <strong>TEMPO DE INGRESSO:</strong>
            <p>{processo.entry_time}</p>
            <strong>DURAÇÃO:</strong>
            <p>{processo.duration}</p>
            <strong>QUANTUM:</strong>
            <p>{processo.quantum}</p>
            <strong>PRIORIDADE:</strong>
            <p>{processo.priority}</p>

            <button
              onClick={() => handleDeleteProcess(processo._id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
      <footer>
        {/* <Link type="button" className="button" onClick={handleNew} to="/fifo">Nova Consulta</Link> */}
        <Link className="button" to="/">
          Montar Gráfico
        </Link>
      </footer>
    </div>
  );
}
