import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import PdfContent from "../PdfContent/PdfContent";

const Pdf = () => {
  const ref = useRef();
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.html(ref.current, {
      callback: function (doc) {
        doc.output("dataurlnewwindow", { filename: "custom-ticketed-pdf" });
      },
      x: 10,
      y: 10,
    });
  };
  return (
    <div>
      <button onClick={generatePDF}>Preview & Download PDF</button>
      <div ref={ref}>
        <PdfContent />
      </div>
    </div>
  );
};

export default Pdf;
