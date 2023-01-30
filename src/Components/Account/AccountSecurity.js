import React, { useState, useEffect } from "react";
import "../../css/AccountSecurity.css";
import { useAlertContext } from "../../hooks/useAlertContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { updateUserPassword } from "../../middleware/get-api";
import { validatePassword } from "../../utils/validator";

function AccountSecurity() {
  const { user } = useAuthContext();
  const { setMessage } = useAlertContext();
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    validatePass();
  }, [password, cPassword]);

  const validatePass = () => {
    const invalids = validatePassword(password, cPassword);
    setErrors(invalids);
    return invalids;
  };

  const handleReset = async (e) => {
    e.preventDefault();
    const invalids = validatePass();
    if (invalids.length === 0) {
      await updateUserPassword({ password }, user.token)
        .then((res) => {
          if (!res.ok) throw Error(res.msg);

          setMessage(res.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="lg_AccountSecurity">
        <div className="para_AccountSecurity">
          <h2>Account Security</h2>
        </div>
        <div className="Reset">
          <h5>Reset Password</h5>
        </div>
        <div className="form-Security">
          <form>
            <div className="FormPassword">
              <div>
                <label htmlFor="Password">Password</label>

                <input
                  className={errors.includes("password") ? "red-border" : ""}
                  type="password"
                  id="Password"
                  placeholder="Enter Password . . ."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  {errors.includes("password")
                    ? `Password Must Contain Letters Lower and Upper Case, Numbers,
                  Spacial characters`
                    : ""}
                </div>
              </div>
              <div>
                <label htmlFor="Confirm Password">Confirm Password</label>

                <input
                  className={
                    errors.includes("confirmPassword") ? "red-border" : ""
                  }
                  type="password"
                  id="Confirm Password"
                  placeholder="Confirm Password . . ."
                  value={cPassword}
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
                <div className="invalid-feedback">
                  {errors.includes("confirmPassword")
                    ? "Password Doesn't Match"
                    : ""}
                </div>
              </div>
            </div>

            <div className="FormResetPass">
              <input
                type="submit"
                onClick={handleReset}
                value="Reset Password"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AccountSecurity;
