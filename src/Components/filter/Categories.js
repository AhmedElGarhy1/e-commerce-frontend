import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../middleware/get-api";

import { useFilterContext } from "../../hooks/useFilterContext";

function CategoriesFilter() {
  const { dispatch } = useFilterContext();
  const [categories, setCategories] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        if (!res.ok) return console.log(res.msg);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "CATEGORY", payload: checkedCategories });
  }, [checkedCategories]);

  const isChecked = (e, _id) => {
    let temp = [...checkedCategories];
    if (e.target.checked) {
      const newTemp = new Set([...temp, _id]);
      temp = [...newTemp];
    } else {
      temp = temp.filter((id) => id !== _id);
    }
    setCheckedCategories(temp);
  };
  return (
    <>
      <div className="priceFilter">
        <div className="CategoriesWord">
          <h3>Categories</h3>
        </div>
        {categories.map((category) => (
          <div key={category._id} className="PriceCheckbox">
            <input
              type="checkbox"
              id={category._id}
              onChange={(e) => isChecked(e, category._id)}
            />
            <label htmlFor={category._id} style={{ marginLeft: "5px" }}>
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoriesFilter;
