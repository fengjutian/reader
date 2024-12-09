import { useState } from 'react'
import { MyDocument } from './Views/CreatePDF'
import ReactPDF from '@react-pdf/renderer';
import './App.css'

function App() {

  // console.log(123, __dirname)

  const savePDF = () => {
    // ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
    ReactPDF.renderToStream(<MyDocument />);
  }

  return (
    <>
      <MyDocument/>
      <button onClick={savePDF}>保存</button>
    </>
  )
}

export default App
