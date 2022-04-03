import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

const user = {
  firstName: 'zhao',
  lastName: 'wei'
}
axios.get("http://127.0.0.1:8787/")

ReactDOM.render(
  <h1>hello,world~ 我是改过的页面... {user.firstName}-{user.lastName}</h1>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
