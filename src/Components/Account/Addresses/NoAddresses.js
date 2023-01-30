import React from "react";
import "../../../css/Address/NoAddresses.css";
function NoAddresses({onclick}) {
  return (
    <>
      <div className="lg-NoAddresses">
        <div className="para1_NoAddresses">
          <h2>Addresses</h2>
          <button onClick={onclick}>Add</button>
        </div>

        <div className="para2_NoAddresses">
          <p>No Addresses Found!</p>
        </div>
      </div>
    </>
  );
}
export default NoAddresses;
