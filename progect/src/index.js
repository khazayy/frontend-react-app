import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  BrowserRouter, HashRouter } from 'react-router-dom';
import Store from './store/store';
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><Store/></BrowserRouter>)