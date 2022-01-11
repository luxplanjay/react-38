import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Example1 } from './components/Example1';
// import { Example2 } from './components/Example2';
import { theme } from 'constants/theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Example1 />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
