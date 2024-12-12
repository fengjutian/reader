import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx';
import AddData from './addData/Books.tsx';
import BodyIcon from './BodyIcon.tsx';
import Home from './home/Home.tsx';
import "@arco-design/web-react/dist/css/arco.css";
import 'tdesign-react/es/style/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <StrictMode><App /></StrictMode>} />
      <Route path="/books" element={<AddData/>}/>
      <Route path="/body-icon" element={<BodyIcon/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
)
