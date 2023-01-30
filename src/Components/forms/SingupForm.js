import "react-phone-number-input/style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { createUser } from "../../middleware/get-api";
import { signupValidator } from "../../utils/validator";
import PhoneInput from "react-phone-number-input";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAlertContext } from "../../hooks/useAlertContext";
const SingupForm = () => {
  const { user, dispatch } = useAuthContext();
  const { setMessage } = useAlertContext();
  const navigator = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [Icon1, setIcon1] = useState(true);
  const [Icon2, setIcon2] = useState(true);

  // const[invalids,setInvalids]=useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = { fname, lname, phone, email, password, cPassword };
    const invalids = signupValidator(inputs);

    if (invalids.length === 0) {
      const res = await createUser(inputs);
      // if email is already exist res will be Email is already Exist and it's an string
      if (!res.ok) {
        setErrors((prev) => [...prev, "email"]);
        setMessage(res.msg);
        return;
      }
      // else it will return an object with userData and token
      dispatch({ type: "LOGIN", payload: res.data });
      setMessage(res.msg);
      navigator("/");
    } else {
      setErrors(invalids);
      setMessage(`Invalid ${invalids[0]}`);
    }
  };
  return (
    <div>
      <Form className="signup-form" noValidate onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6 mt-2 mb-2">
            <Form.Group controlId="formBasicFirst">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                type="text"
                placeholder="Ahmed"
                className={errors.includes("fname") ? "red-border" : ""}
                required
              />
            </Form.Group>
          </div>
          <div className="col-12 col-md-6 mt-2 mb-2">
            <Form.Group controlId="formBasicLast">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLname(e.target.value)}
                value={lname}
                type="text"
                placeholder="ElTokhy"
                className={errors.includes("lname") ? "red-border" : ""}
                required
              />
              {/* <div className="valid-feedback" */}
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mt-2 mb-2">
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <PhoneInput
                className={
                  errors.includes("phone") ? "red-border phone" : "phone"
                }
                international
                defaultCountry="EG"
                value={phone}
                onChange={setPhone}
              />
            </Form.Group>
          </div>
          <div className="col-12 col-md-6 mt-2 mb-2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="Email"
                placeholder="jeo@gmail.com"
                className={errors.includes("email") ? "red-border" : ""}
                required
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mt-2 mb-2">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div style={{ position: "relative" }}>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={Icon1 ? "Password" : "text"}
                  className={errors.includes("password") ? "red-border" : ""}
                  placeholder="**************"
                  required
                />
                <i
                  className={
                    Icon1 ? "fa-solid  fa-eye-slash" : "fa-solid fa-eye"
                  }
                  style={{
                    position: "absolute",
                    top: "9px",
                    right: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIcon1(!Icon1)}></i>
              </div>
              {errors.includes("password") && (
                <div className="invalid-feedback">
                  Password Must Contain Letters Lower and Upper Case, Numbers,
                  Spacial characters
                </div>
              )}
            </Form.Group>
          </div>
          <div className="col-12 col-md-6 mt-2 mb-2">
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div style={{ position: "relative" }}>
                <Form.Control
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  type={Icon2 ? "Password" : "text"}
                  placeholder="**************"
                  className={
                    errors.includes("confirmPassword") ? "red-border" : ""
                  }
                  required
                />
                <i
                  className={
                    Icon2 ? "fa-solid  fa-eye-slash" : "fa-solid fa-eye"
                  }
                  style={{
                    position: "absolute",
                    top: "9px",
                    right: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIcon2(!Icon2)}></i>
              </div>
              {errors.includes("confirmPassword") && (
                <div className="invalid-feedback">Password Doesn't Match!!</div>
              )}
            </Form.Group>
          </div>
        </div>

        <button className="d-block text-light ms-auto register">
          Register
        </button>
      </Form>
    </div>
  );
};

export default SingupForm;
