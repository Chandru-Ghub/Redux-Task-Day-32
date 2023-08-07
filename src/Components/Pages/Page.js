import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Reducers/cart";
import Footer from "./Footer";

export default function Page() {
  const [items, setItems] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/mocks/products2.json")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.products) setItems(result.products);
      })
      .catch((e) => console.log(e));
    // return () => {};
  }, []);

  function handleAddToCart(data) {
    dispatch(addItem({ ...data, quantity: 1 }));
    console.log(addItem({ ...data, quantity: 1 }));
  }

  return (
    <section>
      <div className="container_card"> 
          {items &&
            items.map((d, i) => (
              <Card key={`items-number-${i}`} data={d} handleAdd={handleAddToCart} />
            ))}
      </div>
      <Footer/>
    </section>
  );
}
