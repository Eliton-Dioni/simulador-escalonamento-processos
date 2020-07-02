import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Fifo from './pages/Fifo';
import sjf from './pages/Sjf2';
import Prioridade from './pages/Prioridade';
import RoundRobin from './pages/RoundRobin'
import RegisterFifo from './pages/RegisterFifo';
import RegisterSJF from './pages/RegisterSJF';
import RegisterRR from './pages/RegisterRR'
import RegisterPrioridade from './pages/RegisterPrioridade';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/fifo" component={Fifo} />
        <Route path="/sjf" component={sjf} />
        <Route path="/prioridade" component={Prioridade} />
        <Route path="/roundrobin" component={RoundRobin} />
        <Route path="/registerfifo/new" component={RegisterFifo} />
        <Route path="/registersjf/new" component={RegisterSJF} />
        <Route path="/registerround/new" component={RegisterRR} />
        <Route path="/registerprioridade/new" component={RegisterPrioridade} />
      </Switch>
    </BrowserRouter>
  );
}