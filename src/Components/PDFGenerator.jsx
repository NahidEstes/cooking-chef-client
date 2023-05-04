import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFGenerator = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById("my-paragraph");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("my-pdf.pdf");
    });
  };

  return (
    <div>
      <button
        onClick={handleDownloadPDF}
        className="font-bold bg-orange-500 p-3 rounded text-white"
      >
        Download PDF
      </button>
      <div id="my-paragraph">
        <div className="mt-4 p-3">
          {/* ---------- First Answer ---------- */}

          <h3 className=" text-2xl font-semibold">
            1. Tell us the differences between uncontrolled and controlled
            components
          </h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            In, <strong>controlled components</strong> the parent component is
            responsible for managing the state and passing it down as props to
            the controlled component. This makes it easy to track the state of
            the component and predict how it will behave.
            <br />
            <strong>uncontrolled components</strong> manage their own state
            using a ref to access the DOM element's current value and update the
            state accordingly. This makes them simpler to implement, but they
            can be more difficult to track and manage in larger projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;
