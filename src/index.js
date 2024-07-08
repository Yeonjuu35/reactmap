import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const myinfo =[{
        price : 50000,
        pronm : "신발",
        protext : "싸요싸요!!! 언능 사가"
    },
    {
        price : 100000,
        pronm : "신발",
        protext : "안싸요안싸요!!! 깍아줘"
    },
    {
        price : 100000,
        pronm : "신발아님",
        protext : "안싸요안싸요!!! 깍아줘"
    }];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // <>
  //   {
  //     myinfo.map((ele, idx)=>{
  //       return(
  //         <App sendinfo={myinfo[idx]}></App>
  //       )
  //     })
  //   }
  // </> 
  <>
    {
      myinfo.map((ele, idx) => <App sendinfo={myinfo[idx]}></App>)
      // 맵 안엔 리턴이 이미 존재, 간단하게 요약 가능
    }
  </> 
);