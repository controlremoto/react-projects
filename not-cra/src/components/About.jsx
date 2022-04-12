import React from "react";

const About = () => {
  return (
    <div>
      <h1> Hellow World!, this is the {process.env.NODE_ENV} environment </h1>
      This is the <i>REACT_APP_NOT_SECRET_CODE</i> value {process.env.REACT_APP_NOT_SECRET_CODE}
    </div>
  );
};

export default About;