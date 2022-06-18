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
      let bool = false;
      const list = basket.map((item) => {
        if (item.id === product.id) {
          item.number = item.number + 1;
          // console.log(item);
          bool = true;
        }
        return item;
      });
      if (bool) {
        console.log(list);
        return setbasket(list);
      }
      if (!bool) {
        return setbasket((prev) => {
          return [...prev, { ...product, number: 1 }];
        });
      }
      return;
    }
    setbasket((prevItems) => {
      console.log("3");
      return [...prevItems, { ...product, number: 1 }];
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
