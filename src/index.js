import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'font-awesome/css/font-awesome.min.css'
import reportWebVitals from './reportWebVitals';
import Homenav from './Homenav';
import Firstcompo from './Firstcompo';
import Secondcompo from './Secondcompo';
import Thirdcompo from './Thirdcompo';
import Fourth from './Fourth';
import Fivecompo from './Fivecompo';
import Sixthcompo from './Sixthcompo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homenav />
    <Firstcompo />
    <Secondcompo />
    <Thirdcompo />
    <Fourth />
    <Fivecompo />
    <Sixthcompo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
