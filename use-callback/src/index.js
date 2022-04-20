import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import UseFetch from './CustomHooks/UseFetch';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {
  
  const [data] = UseFetch("https://jsonplaceholder.typicode.com/albums")
  
  return(
    <>
    <h2>Album titles:</h2>
      {
        data && data.map((item)=>{
          return <p key={item.id}>{item.title}</p>
        })
      }
    </>
  )
}


root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();