import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Appの代わりにHelloをインポート
import App from './App';
import Hello from './components/Hello'
import Name from './components/Name';
import reportWebVitals from './reportWebVitals';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import UseStateCounter from './components/StudyReactHooks/useStateCounter';
import UseReducerCounter from './components/StudyReactHooks/useReducerCount';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Page/>
    <UseReducerCounter initialValue={10} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
