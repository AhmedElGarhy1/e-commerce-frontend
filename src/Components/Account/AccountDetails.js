import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "../../css/AccountDetails.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { updateUserInfo } from "../../middleware/get-api";
const borderBottom = {
  borderBottom: "1px solid gray",
  width: "fitContent",
  padding: "5px 5px",
};

function AccountDetails() {
  const { user, dispatch } = useAuthContext();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    setFname((user && user.fname) || "");
    setLname((user && user.lname) || "");
    setPhone((user && user.phone) || "");
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    if (isChange) {
      // api req
      const data = { fname, lname, phone };
      setLoading(true);
      await updateUserInfo(data, user.token)
        .then((res) => {
          if (!res.ok) throw Error(res.msg);
          dispatch({ type: "UPDATE", payload: data });
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
      return setIsChange(false);
    }
    setIsChange(true);
  };

  return (
    <>
      <div className="lg_AccountDetails">
        <div className="para_AccountDetails">
          <h2>Account Details</h2>
        </div>
        <div className="emailMember">
          <p>{user && user.email}</p>

          <div>
            <h5>Member</h5>
          </div>
        </div>
        <div className="form">
          <form>
            <div className="FormName">
              <div>
                <label htmlFor="firstName">First Name</label>
                {isChange ? (
                  <input
                    type="text"
                    id="firstName"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="e.g Aya"
                  />
                ) : (
                  <p style={borderBottom}>{fname}</p>
                )}
              </div>
              <div>
                <label htmlFor="LastName">Last Name</label>
                {isChange ? (
                  <input
                    type="text"
                    id="LastName"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="e.g Goda"
                  />
                ) : (
                  <p style={borderBottom}>{lname}</p>
                )}
              </div>
            </div>
            <div className="FormPhone">
              <label htmlFor="Phone Number">Phone Number</label>
              {isChange ? (
                // <input
                //   type="text"
                //   id="Phone Number"
                //   placeholder="Please Enter Your Phone Number"
                //   value={phone}
                //   onChange={(e) => setPhone(e.target.value)}
                // />
                <PhoneInput
                  className="phone"
                  international
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <p style={borderBottom}>{phone}</p>
              )}
            </div>
            <div className="FormSave">
              <input
                onClick={handleSave}
                type="submit"
                value={
                  loading ? "Loading..." : isChange ? "Save Changes" : "Change"
                }
                disabled={loading}
                className={loading ? "disabled" : ""}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AccountDetails;
