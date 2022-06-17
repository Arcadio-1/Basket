import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "banana", img: "./imges/banana.png" },
    { id: 2, name: "apple", img: "./imges/apple.png" },
    { id: 3, name: "milk", img: "./imges/milk.png" },
    { id: 4, name: "meat", img: "./imges/meat.png" },
    { id: 5, name: "bread", img: "./imges/bread.png" },
    { id: 6, name: "egg", img: "./imges/egg.png" },
  ];
  const [basket, setbasket] = useState("");

  const addToBasketHandler = (product) => {
    if (basket.length > 0) {
      setbasket((prevItems) => {
        basket.map((item) => {
          if (item.id === product.id) {
            item.number++;
            return [...prevItems];
          } else {
            return [...prevItems, product];
          }
        });
      });
    }
    setbasket((prevItems) => {
      console.log(basket);
      return [...prevItems, product];
    });
  };
  return (
    <div className="countainer">
      <Header></Header>
      <div className="body-container">
        <Main products={products} addToBasket={addToBasketHandler}></Main>
        <Menu products={basket}></Menu>
      </div>
    </div>
  );
}

export default App;
