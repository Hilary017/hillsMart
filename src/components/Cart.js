import { useContext, useState } from "react"

import CartContext from "./CartContext"
import CartItem from './CartItem'

export default function Cart() {
    const orderCtx = useContext(CartContext);

    const [totalCost, setTotalCost] = useState();
    const [qty, setQty] = useState(1);
    const [sum, setSum] = useState(1);

    const peace = orderCtx.order

    function sumUpTotal(quantity) {
        setSum(prev => prev + 1)
        for(const piece of peace) {
            console.log(piece)
        }
    }

    function setQuantity() {
        setQty(prev => prev + 1)
    }

    function deleteItem(id) {
        orderCtx.removeOrder(id)
    }


    const Joy = (
        peace.map(item => {
            return <CartItem key={item.id} 
                            id={item.id}
                            name={item.name}
                            // quantity={qty}
                            price={item.price}
                            handleClick={() => deleteItem(item.id)}
                            clickHandler={setQuantity}
            />
        })
    )


    return <div onClick={sumUpTotal}>
        <h2>Total Item</h2>
        <div className="cart--section">
            {Joy}
        </div>
        <h5>Total Amount: {totalCost}</h5>
        <button>Confirm Order</button>
        </div>
}