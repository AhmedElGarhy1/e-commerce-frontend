import React from "react";
import List_group from "./listGroup";

const MobilMenu = ({ element }) => {
  return (
    <>
      <div className="d-lg-flex d-md-flex d-xl-flex parentAccount">
        <div className="listgroup">
          <div style={{ width: "350px" }} className="listgroupchild">
            {<List_group />}
          </div>
        </div>
        <div
          className="ParentAccountRightPart"
          style={{ width: "90%", marginTop: "40px" }}>
          {element}
        </div>
      </div>
    </>
  );
};

export default MobilMenu;
