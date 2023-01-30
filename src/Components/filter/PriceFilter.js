import React, { useEffect, useState } from "react";
import { useFilterContext } from "../../hooks/useFilterContext";

const prices = [
  {
    id: 0,
    value: "Less than $100",
    min: 0,
    max: 100,
  },
  {
    id: 1,
    value: "$100-$500",
    min: 100,
    max: 500,
  },
  {
    id: 2,
    value: "$500-$1k",
    min: 500,
    max: 1000,
  },
  {
    id: 3,
    value: "$1k-$5k",
    min: 1000,
    max: 5000,
  },
  {
    id: 4,
    value: "$5k+",
    min: 5000,
    max: 1000000,
  },
];

function PriceFilter() {
  const [checked, setChecked] = useState([]);
  const [isCheckedInput, setIsCheckedInput] = useState(false);

  const { dispatch } = useFilterContext();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const isChecked = (bool, id, min, max) => {
    let temp = [...checked];
    temp = temp.filter((m) => m.id !== id);
    if (bool) {
      temp = [...temp, { min: +min || 0, max: +max || 1000000, id }];
    }
    setChecked(temp);
  };

  useEffect(() => {
    dispatch({ type: "PRICES", payload: checked });
  }, [checked.length]);

  useEffect(() => {
    if (isCheckedInput) {
      console.log("object");
      dispatch({ type: "PRICES", payload: checked });
    }
  }, [min, max]);

  return (
    <>
      <div className="priceFilter">
        <div className="PriceWord">
          <h3>Price</h3>
        </div>
        {prices.map((price) => (
          <div key={price.id} className="PriceCheckbox">
            <input
              type="checkbox"
              id={price.id}
              value="Account"
              onChange={(e) =>
                isChecked(e.target.checked, price.id, price.min, price.max)
              }
            />
            <label htmlFor={price.id} style={{ marginLeft: "5px" }}>
              {price.value}
            </label>
          </div>
        ))}

        <div className="PriceCheckbox d-flex mt-4">
          <input
            type="checkbox"
            id="AccountCheckAddress"
            value={isCheckedInput}
            onChange={(e) => {
              isChecked(e, 10, min, max);
              setIsCheckedInput((prev) => !prev);
            }}
          />
          <label htmlFor="AccountCheckAddress" style={{ marginLeft: "5px" }}>
            <input
              type="text"
              className="text"
              value={min}
              onChange={(e) => {
                const n = e.target.value;
                if (!isNaN(n)) {
                  setMin(n);
                  isChecked(isCheckedInput, 10, n, max);
                }
              }}
              placeholder="$ Min"
            />
          </label>
          <label htmlFor="AccountCheckAddress" style={{ marginLeft: "5px" }}>
            <input
              type="text"
              className="text"
              value={max}
              onChange={(e) => {
                const n = e.target.value;
                if (!isNaN(n)) {
                  setMax(n);
                  isChecked(isCheckedInput, 10, min, n);
                }
              }}
              placeholder="$ Max"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
