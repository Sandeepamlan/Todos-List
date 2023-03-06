import React from 'react'

    const Item = ({ ItemList }) => {
        let item = {name:'POLO T Shirts',
                    price:1200,
                    size:"XL"};
    
  return (
    <>
    <h1>Sandeep Palai <i class="bi bi-patch-check"></i></h1>
    <h3>Product Name: {item.name}</h3>
    <h4>Price: ${item.price} <s> $2699</s></h4>
    <h4>Size : {item.size}  </h4>
    </>
  )
}

export default Item;