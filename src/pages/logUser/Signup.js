import React from "react";
import { Link } from "react-router-dom";

import SingupForm from "../../Components/forms/SingupForm";
import "../../css/signup.css";
const Signup = () => {
  window.scrollTo(0, 0);
  return (
    <section className="signup">
      <div className="container">
        <div className="box">
          <h2 className="welcome">Welcome To Aroma</h2>
          <p>Let's set you up so you can create your account</p>
          <SingupForm />
          <Link
            to="/signin"
            className="d-block fit-content text-center mt-3 text-decoration-none text-dark link m-auto"
          >
            Have an account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
