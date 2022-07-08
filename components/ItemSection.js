import Item from './Item'
import React from 'react'
import { useContext, useState } from 'react';
import CartContext from './CartContext';

export default function ItemSection() {
    const cartCtx = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const datas = [
        {
            name: "Nike Nord",
            id: "m0",
            quantity: quantity,
            price: 20.99,
            sum: cartCtx.total
        },
        {
            name: "Nike Soft Lander",
            id: "m1",
            quantity: quantity,
            price: 15.44,
        },
        {
            name: "Nike Air Max",
            id: "m2",
            quantity: quantity,
            price: 12.88,
        },
        {
            name: "Nike Air Wurache",
            id: "m3",
            quantity: quantity,
            price: 43
        },
    ];


    const dummy = (
        datas.map(data => {
            return <Item key={data.id} price={data.price} id={data.id} 
                        name={data.name} quantity={data.quantity}
            />
        })
    )

    return <div className='item-division'>
        {dummy}
    </div>
}





// import Item from './Item'
// import React from 'react'
// import { useState } from 'react'

// export default function ItemSection() {
//     const [quantity, setQuantity] = useState(1);
//     const [price] = useState(29.99);
//     const [amount, setAmount] = useState(price);

//     function increaseQuantity() {
//         setQuantity(prevQty => prevQty + 1)
//     }

//     function reduceQuantity() {
//         setQuantity(prevQty => {
//             if(prevQty === 1) {
//                 return 1
//             }
//             return prevQty - 1
//         })
//     }

//     function totalAmount() {
//         setAmount((price * quantity).toFixed(2))
//     }

//     return <div className='item-division'>
//         <Item 
//         id= "1"
//         increase={increaseQuantity} 
//         quantity={quantity}
//         reduce={reduceQuantity}
//         totalAmount={`\$${amount}`}
//         price= {`\$${price}`}
//         changePrice={totalAmount}
//         />
//         <Item />
//     </div>
// }