import React, { useState } from "react";
import list from "../data/accountListItems";
import { Link } from "react-router-dom";
function AccountListLayout() {
  const [CloseX, setCloseX] = useState(true);
  const handleClickX = () => {
    setCloseX(true);
  };
  const handleShowX = () => {
    setCloseX(false);
  };
  return (
    <>
      <div className="d-lg-none d-xl-none d-md-none listGroupSmallMedia">
        <div>
          <i className="fa-solid fa-bars barAccount" onClick={handleShowX}></i>
        </div>
        <div className={CloseX ? "Showx" : "closeX"}>
          <i
            className="fa-regular fa-x close-x-menu d-lg-none d-xl-none d-md-none"
            onClick={handleClickX}></i>
          {list.map((item) => (
            <div key={item.id} className="itemOfLayout" onClick={handleClickX}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AccountListLayout;
