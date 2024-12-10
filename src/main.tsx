import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx';
import AddData from './addData/Books.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <StrictMode><App /></StrictMode>} />
      <Route path="/books" element={<AddData/>}/>
    </Routes>
  </BrowserRouter>
)
