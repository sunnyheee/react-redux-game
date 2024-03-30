import React from "react";
import { useSelector } from "react-redux";

const Box2 = () => {
  let count = useSelector((state) => state.count);
  return <div>this is Box2 {count}</div>;
};

export default Box2;
