import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import * as themes from './styles/themes';
import Routes from './routes';
import './global.css';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState('theme', themes.dark);

  const toggleTheme = () =>
  theme === themes.dark
    ? setTheme(themes.light)
    : setTheme(themes.dark);


  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;