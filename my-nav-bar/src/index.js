import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoices from './routes/invoices'
import Invoice from './routes/invoice'
import Expenses from './routes/expenses'
import PageNotFound from './routes/404';
import MainInvoice from './routes/mainInvoice';

const container = document.getElementById('root');
const root = createRoot(container);

/**
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/invoices' element={<Invoices />}>
            <Route index element={<MainInvoice />} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='/expenses' element={<Expenses />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
**/


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/invoices' element={<Invoices />}>
            <Route index element={<MainInvoice />} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='/expenses' element={<Expenses />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
