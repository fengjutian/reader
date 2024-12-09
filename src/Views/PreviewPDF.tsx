import React from 'react';
import { PDFViewer, PDFPage } from '@react-pdf/renderer';

const PreviewPDF = () => {
    const pdfFileUrl = 'src/PDFs/ConvergenceWhitePaperPUBLICATION20240321.pdf'; // 替换为你的 PDF 文件的路径或 URL

    return (
      <div>
        <h1>PDF to Image Example</h1>
        <PDFViewer width={600} height={800} filePath={pdfFileUrl} 
            scale={1.0} 
            pageNumber={1}> 
            
        </PDFViewer>
      </div>
    );
}

export default PreviewPDF;