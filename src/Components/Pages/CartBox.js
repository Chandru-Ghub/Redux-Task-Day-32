import React from 'react'

export default function CartBox({data = {},  increament = () => {}, decreament = () => {}, handleDelete = () => {}}) {
  return (<section>
      <div className='cardBox'>
            <img className='image' src={data.thumbnail} alt="logo"  />
            <div className="align">
            <div>
              <li className='title'>{data.title}</li>
              <li className='desc'>{data.description}</li>
              <li><b>Total Cost</b>:₹{data.quantity * data.price}</li>
            </div>
            <div className='btnalign'>
              <button className='tbutton' onClick={() => decreament(data)}>-</button>
              <p className='quantity'>{data.quantity}</p>
              <button className='tbutton' onClick={() => increament(data)}>+</button>
            </div>
            <button className='rmv' onClick={() => handleDelete(data)}>Remove </button>
            </div>
      </div> 
  </section>              
  )
}
