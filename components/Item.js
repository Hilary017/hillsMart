import { useState, useContext } from "react";
import CartContext from "./CartContext";

export default function Item(props) {
    const orderCtx = useContext(CartContext)

    const [quantity, setQuantity] = useState(2);
    const [price] = useState(props.price);

    const itemIsOrder = orderCtx.itemIsOrder(props.id);
    const updatedCost = props.price * quantity;

    function toggleCartSect() {
        if(itemIsOrder) {
            orderCtx.removeOrder(props.id)
        } else {
            orderCtx.addOrder({
                id: props.id,
                name: props.name,
                // quantity: orderCtx.quantity,
                price: props.price,
                total: props.price * quantity
        }
            )
        }
    }


    return <div className="container">
        <div> 
            <img className="shopping" src="../shoe.jpg" alt="A shoe" />
            <div className="divide">
                <div className="item-section">
                    <h3 className="item-name">{props.name}</h3>
                    <p className="price" id="amount">${price}</p>
                </div>
            </div>
        </div>
        
        <div className="addBtn" onClick={props.changePrice}>
            <button className="cart-btn" onClick={toggleCartSect}>{itemIsOrder ? "Remove from cart" : "Add to Cart" }</button>
        </div>
    </div>
    }
