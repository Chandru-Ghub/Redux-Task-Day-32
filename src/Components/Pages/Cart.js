import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartBox from './CartBox';
import { Link, useNavigate } from 'react-router-dom';
import { modifyItem, removeItem } from '../../Redux/Reducers/cart';
import emtyCart from './empty-cart.05d8cea1.gif'
export default function Cart() {
  const list = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleDeleteToCart(data) {
    dispatch(removeItem(data));
  }

  function increament(data) {
    dispatch(modifyItem({ ...data, quantity: data.quantity + 1 }));
  }

  function decreament(data) {
    if (data.quantity > 1) {
      dispatch(modifyItem({ ...data, quantity: data.quantity - 1 }));
    }
  }

  function totalPrice() {
    let totalAmount = 0;
    list.forEach((data) => {
      totalAmount += data.price * data.quantity;
    });
    return totalAmount;
  }

  const navigate = useNavigate();

  function handleCheckout() {
    alert("Add more!");
    navigate("/");
  }

  return (
    <div className='wholecart'>
         
            {list.length == 0 ?(<div className='emptycart'> <img className='kart' src={emtyCart} alt="emptyCart" />
        <p className='oops'><span className='op'>OOPS!</span> YOUR CART IS EMPTY</p>
        </div>):null}
            {list.length!=0?(
              <div className='listing'>
                  <h6 className='gross'>Gross Total:₹{totalPrice()}</h6>
                <button
                  className="rmvbtn"
                  onClick={() => handleCheckout()}>
                 Add More
                </button>
              </div>
            ):null}
            <div className="cartitems">
            {list.map((data, i) => (
              <CartBox
                key={`product-${i}`}
                data={data}
                handleDelete={handleDeleteToCart}
                increament={increament}
                decreament={decreament}
              />
            ))}
          </div>
        
          
    </div>

  );
}
