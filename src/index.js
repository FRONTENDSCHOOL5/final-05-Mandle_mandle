import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);
