import React from "react";
import { useSelector } from "react-redux";
import Box2 from "./Box2";

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      this is Box {count}
      <Box2 />
    </div>
  );
};

export default Box;
