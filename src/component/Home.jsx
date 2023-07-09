import React from "react";
import HigherOrderLayout from "./HigherOrderLayout";
const Home = (props) => {
  console.log("state from HOC", props.data);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default HigherOrderLayout(Home);
