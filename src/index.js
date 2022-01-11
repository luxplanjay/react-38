import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import { Example1 } from './components/Example1';
// import { Example2 } from './components/Example2';
import { Reader } from './components/Reader/Reader';
import { theme } from 'constants/theme';
import './index.css';
import publications from './publications.json';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
