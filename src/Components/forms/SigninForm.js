import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signinValidator } from "../../utils/validator";
import { logUser } from "../../middleware/get-api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAlertContext } from "../../hooks/useAlertContext";
// import FlashMessage from "../../contexts/Alert";

function SigninForm() {
  const { setMessage } = useAlertContext();
  const navigator = useNavigate();
  const { dispatch } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [Icon, setIcon] = useState(true);

  const checkboxRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const invalids = signinValidator(email, password);
    setErrors(invalids);
    // console.log(email, password, checkboxRef.current.checked);

    if (invalids.length !== 0) {
      console.log(invalids);
      const msg = invalids.includes("email")
        ? `Invalid Email`
        : `Invalid Password`;
      setMessage(msg);
      return;
    }
    const res = await logUser({
      email,
      password,
      checked: checkboxRef.current.checked,
    });
    console.log(res);
    if (!res.ok) {
      setErrors((prev) => [...prev, res.msg]);
      setMessage(`Invalid ${res.msg}`);
    } else {
      dispatch({ type: "LOGIN", payload: res.data });
      console.log(res.msg);
      setMessage(res.msg);
      navigator("/");
    }
  };
  const handleIcon = () => {
    setIcon(!Icon);
  };
  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Username"
            className={errors.includes("email") ? "red-border email" : " email"}
          />
          {errors.includes("email") && (
            <div className="invalid-feedback">Invalid Email</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div style={{ position: "relative" }}>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={Icon ? "Password" : "text"}
              placeholder="Password"
              className={
                errors.includes("password") ? "red-border password" : "password"
              }
            />
            <i
              className={Icon ? "fa-solid  fa-eye-slash" : "fa-solid fa-eye"}
              style={{
                position: "absolute",
                top: "20px",
                right: "15px",
                cursor: "pointer",
              }}
              onClick={handleIcon}></i>
          </div>
          {errors.includes("password") && (
            <div className="invalid-feedback">Wrong Password</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check ref={checkboxRef} type="checkbox" label="Keeb me login" />
        </Form.Group>
        <Button className="submit m-auto d-block" variant="dark" type="submit">
          Log In
        </Button>
        <Link
          to="/"
          className="d-block  text-center mt-3 text-decoration-none text-dark link m-auto">
          Forget password?
        </Link>
      </Form>
    </>
  );
}

export default SigninForm;
