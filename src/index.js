import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

function clock() {
  const element = (
    <main>
      <h1> Digital Clock</h1>
      <h1 className='datebox'>Date: {new Date().getDate()} - {new Date().getMonth() + 1 } - {new Date().getFullYear()}</h1>
      <div className='App'>
        <h1>{new Date().getHours()}</h1>&nbsp;<strong>:</strong>&nbsp;
        <h1>{new Date().getMinutes()}</h1>&nbsp;<strong>:</strong>&nbsp;
        <h1>{new Date().getSeconds()}</h1>
        {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      </div>
      <footer>&copy;&nbsp;<a href="https://akhlak-hossain-jim.github.io/" target="_blank" rel="noopener noreferrer">Akhlak Hossain Jim</a>&nbsp;{new Date().getFullYear()}</footer>
    </main>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(clock, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
