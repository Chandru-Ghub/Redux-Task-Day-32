import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Reducers/cart";
import Footer from "./Footer";
import adss from './iphone.mp4'
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
       <div className="video">
            <video className='appleads' autoPlay loop muted  src={adss}></video>
            
        </div>
      <div className="container_card"> 
          {items &&
            items.map((d, i) => (
              <Card key={`items-number-${i}`} data={d} handleAdd={handleAddToCart} />
            ))}
      </div>
      <h2 className='h2'>
                It’s easy to switch from
                Android to iPhone.
        </h2>
        <div className="temoj">
             <img className='emoj1' src="https://www.apple.com/in/iphone/home/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg" alt="" />
        </div>
        
       <div className="switch">
        <img className='emoj' src='https://www.apple.com/in/iphone/cop/images/overview/v1_testimoji_static_large.png' alt="" />
       
        
        </div>
      <Footer/>
    </section>
  );
}
