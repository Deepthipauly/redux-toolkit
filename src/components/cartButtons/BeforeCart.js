import React from 'react'
import './cartButton.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/cart' // ith import akyal anu redux l ula actions namak kitolu


const BeforeCart = ({product}) => {
 const dispatch= useDispatch()
  return (
    <div className='before-cart'>
        <button className='add-cart-button' onClick={()=>dispatch(addtoCart(product))}>Add to cart</button>
        </div>
  )
}


  {/* addtoCart namk direct redux n vilika patula so dispatch use aki then click cheyumbol add to cart wrk ayal mathy so
  onclick l dispatch and call aki */}
   

export default BeforeCart