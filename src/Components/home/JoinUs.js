import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import '../../css/joinUs.css';
const Platform = () => {
  return (
    <>
      <div className="main-div-platform">
        <div className="small-div-platform">
          <h1>E-commerce Plateform</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div>
            <Link to="/signin">
              <Button className="submit" variant="dark" type="submit">
                LogIn
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="submit Reg" variant="dark" type="submit">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
