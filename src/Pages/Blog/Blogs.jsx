import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Blogs = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById("my-blogs");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("my-pdf.pdf");
    });
  };

  return (
    <div className="custom-container">
      <div id="my-blogs">
        {/* ---------- First Answer ---------- */}
        <div className="mt-4 p-3">
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

        {/* ---------- Second Answer ---------- */}
        <div className="mt-4 p-3">
          <h3 className=" text-2xl font-semibold">
            2.How to validate React props using PropTypes?
          </h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            PropTypes is React’s internal mechanism for adding type checking to
            component props. React components use a special property called
            propTypes to set up type checking. <br /> When developing a React
            application, you’ll need to structure and define your props to avoid
            bugs and errors. Just like a function might have mandatory
            arguments, a React component might require a prop to be defined,
            otherwise, it will not render properly. Forgetting to pass a
            required prop into a component that needs it could cause your app to
            behave unexpectedly.
          </p>
        </div>

        {/* ---------- Third Answer ---------- */}
        <div className="mt-4 p-3">
          <h3 className=" text-2xl font-semibold">
            3. Tell us the difference between nodejs and express js.
          </h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            Node.js is an open source and cross-platform runtime environment for
            executing JavaScript code outside of a browser. You need to remember
            that NodeJS is not a framework and it’s not a programming language.
            Most of the people are confused and understand it’s a framework or a
            programming language. We often use Node.js for building back-end
            services like APIs like Web App or Mobile App. It’s used in
            production by large companies such as Paypal, Uber, Netflix, Walmart
            and so on.
            <br />
            Express is a small framework that sits on top of Node.js’s web
            server functionality to simplify its APIs and add helpful new
            features. It makes it easier to organize your application’s
            functionality with middle ware and routing. It adds helpful
            utilities to Node.js’s HTTP objects. It facilitates the rendering of
            dynamic HTTP objects.
          </p>
        </div>

        {/* ---------- Fourth Answer ---------- */}
        <div className="mt-4 p-3">
          <h3 className=" text-2xl font-semibold">
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p className="mt-3 lg:w-8/12 text-lg">
            <span className="underline text-xl font-bold pr-2">Answer:</span>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
      <button
        onClick={handleDownloadPDF}
        className="font-bold bg-orange-500 p-3 rounded text-white mt-5"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Blogs;
