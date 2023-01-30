import React from "react";
import "../../../css/Address/AddAddresses.css";
function AddAddresses({ Cansel }) {
  return (
    <>
      <div className="lg-AddAddresses">
        <div className="para1_AddAddresses">
          <h2>Add Address</h2>
          <button onClick={Cansel}>cancel</button>
        </div>

        <div className="FormAddAddresses">
          <form>
            <div className="FormAddresses">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="Address"
                placeholder="Please Enter address,House Num . . ."
              />
            </div>

            <div className="FormCity">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Please Enter City . . ."
              />
            </div>

            <div className="FormState-Country">
              <div>
                <label htmlFor="state">State</label>
                <input type="text" id="state" placeholder="state" />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter Your Country"
                />
              </div>
            </div>

            <div className="FormZipCode">
              <label htmlFor="Zipcode">Zipcode</label>
              <input
                type="text"
                id="Zipcode"
                placeholder="Please Enter Your Zipcode . . ."
              />
            </div>

            <div className="Formcheckbox">
              <input
                type="checkbox"
                id="AccountCheckAddress"
                name="AccountCheckAddress"
                value="Account"
              />
              <label
                htmlFor="AccountCheckAddress"
                style={{ marginLeft: "5px" }}>
                {" "}
                As The Default
              </label>
            </div>

            <div className="FormSave">
              <input type="submit" value="Add Address" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddAddresses;
