import { Link } from "react-router-dom";
import list from "../../data/accountListItems";

const List_group = () => {
  return (
    <ul className="list-group p-2" style={{ width: "80%", marginLeft: "15%" }}>
      <li
        className="list-group-item"
        style={{
          textAlign: "center",
          borderBottom: "1px #ec8e1b solid",
          color: "#ec8e1b",
          fontSize: "22px",
        }}>
        Account
      </li>
      {list.map((item) => (
        <Link key={item.id} to={item.path}>
          <li className="list-group-item" style={{ textAlign: "center" }}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default List_group;
