import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const dark=document.getElementById("light")
dark.addEventListener('click',fun)
function fun()
{
  document.body.classList.toggle('darkmode')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


