import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const myinfo = [{
  price : 5000,
  pronm : "신발",
  protext : "팝니다"
  },
  {
  price : 50000,
  pronm : "신발",
  protext : "팝니다.."
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App sendinfo={myinfo[0]}></App>
    <App sendinfo={myinfo[1]}></App>
  </>
);
