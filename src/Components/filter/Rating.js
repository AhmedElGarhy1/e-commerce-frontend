import React, { useEffect, useState } from "react";
import { Box, Slider } from "@material-ui/core";
import { useFilterContext } from "../../hooks/useFilterContext";

const marks = [
  {
    value: 1,
    label: (
      <span>
        <i style={{ color: "#ec8e1b" }} className="fa-solid fa-star"></i>5
      </span>
    ),
  },
  {
    value: 2,
    label: (
      <span>
        <i style={{ color: "#ec8e1b" }} className="fa-solid fa-star"></i>4
      </span>
    ),
  },
  {
    value: 3,
    label: (
      <span>
        <i style={{ color: "#ec8e1b" }} className="fa-solid fa-star"></i>3
      </span>
    ),
  },
  {
    value: 4,
    label: (
      <span>
        <i style={{ color: "#ec8e1b" }} className="fa-solid fa-star"></i>2
      </span>
    ),
  },
  {
    value: 5,
    label: (
      <span>
        <i style={{ color: "#ec8e1b" }} className="fa-solid fa-star"></i>1
      </span>
    ),
  },
];

export default function DiscreteSlider() {
  const { dispatch } = useFilterContext();
  const [rate, setRate] = useState(5);

  useEffect(() => {
    dispatch({ type: "MIN_RATE", payload: 6 - rate });
  }, [rate]);

  return (
    <div className="parentRate">
      <div className="topPartRate">
        <h3>Rating</h3>
      </div>
      <div className="bottomPartRate">
        <Box sx={{ width: 5 }}>
          <Slider
            step={1}
            min={1}
            max={5}
            value={rate}
            marks={marks}
            onChange={(e, value) => setRate(value)}
          />
        </Box>
      </div>
    </div>
  );
}
