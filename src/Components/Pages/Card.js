import React from 'react';

export default function Pagecard({ data = {}, handleAdd = (e) => {} }) {
  return (
          <div className='card cards'>
              <img className="img" src={data.thumbnail}  alt="products" />
              <ul>
                  <li className='title'>{data.title}</li>
                  <li className='rating'>⭐{data.rating}</li>
                  <li className='offer'>{data.offer}</li>
                  <li className='price'><b>Price</b>: ₹{data.price}</li>
              </ul>
              
                <button className="primary" onClick={() => handleAdd(data)}>Add to Cart</button>
          </div>
      
 
  );
}
