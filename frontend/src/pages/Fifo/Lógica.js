const maxProcess = 10;
const maxDuration = 80;

function fifo() {
  let processos = [
    {
      nome: 'C',
      entrada: 3,
      duracao: 8
    },
    {
      nome: 'D',
      entrada: 5,
      duracao: 10
    }
  ];
  let fila = [
    {
      nome: 'A',
      entrada: 0,
      duracao: 4
    },
    {
      nome: 'B',
      entrada: 0,
      duracao: 12
    },
  ];
  let processando = undefined;
  let adicional = 0;

  for (let i = 1; i <= maxDuration; i++) {
    console.log('TEMPO : ' + i);
    for (let j = 1; j <= processos.length; j++) {
      if(processos[j - 1].entrada == i){
        fila.push(processos[j - 1]);
        console.log("O processo " + processos[j - 1].nome + ' entrou na fila no tempo ' + i);
      }
    }

    for (let k = 0; k < fila.length - 1; k++) {
      if(processando == undefined){
        processando = fila.shift();
        //processando.duracao = processando.duracao + 1;
        console.log('o processo ' + processando.nome + ' esta em processamento no tempo ' + i + ' com duracao total de ' + processando.duracao)
      }
    }

    if(processando != undefined) {
      if((i - processando.entrada) > processando.duracao){
        console.log("O processo " + processando.nome + ' saiu no tempo ' + i);
        // duracaoAnterior = processando.duracao;
        // entradaAnterior = processando.entrada
        processando = fila.shift();
        //processando.duracao = processando.duracao - processando.entrada;
        //processando.duracao = processando.duracao + adicional
        console.log('o processo ' + processando.nome + ' esta em processamento no tempo ' + i + ' com duracao total de ' + processando.duracao)
      }    
    }
  }
}

fifo();