import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ALL_PRODUCTS } from "./redux/action/action";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(ALL_PRODUCTS(json)));
  });
  return <></>;
}

export default App;
