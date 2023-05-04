import React from "react";

const Blogs = () => {
  return (
    <div className="custom-container">
      <h1 className="text-center mt-12 underline text-3xl font-bold">
        Blog Question and Answer:
      </h1>
      <div>
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

export default Blogs;
