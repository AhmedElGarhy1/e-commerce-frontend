import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import "../../css/signin.css";
import SigninForm from "../../Components/forms/SigninForm";
const Signin = () => {
  window.scrollTo(0, 0);
  return (
    <section className="signin">
      <div className="container">
        <div className="box">
          <div className="info">
            <div>
              <h1>New to our website?</h1>
              <p>There are products in all categories . </p>
              <Link to="/signup">
                <Button className="btn btn-light">Create an account</Button>
              </Link>
            </div>
          </div>
          <div className="login">
            <div className="center">
              <div className="title">Login To Enter</div>
              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
