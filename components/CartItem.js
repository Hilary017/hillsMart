import { useState, useContext } from "react";
import CartContext from "./CartContext";

function CartItem(props) {
    const cartCtx = useContext(CartContext);

    const [quantity, setQuantity] = useState(cartCtx.quantity);

    function reduceQty() {
        if(quantity === 1) {
            return 1
        }

        setQuantity(prevQuantity => {
            return prevQuantity - 1;
        })
    }

    function increaseQty() {
        setQuantity(prevQuantity => {
            return prevQuantity + 1;
        });
        console.log(cartCtx.order)
        return quantity
    }


    const total = (quantity * props.price).toFixed(2)

    return <div className="cartItem-container" id={props.id}>
        <div className="cartItem-main"> 
            <img className="cartItem-img" src="../shoe.jpg" alt="A shoe" />
            <div className="">
                <div className="">
                    <h3 className="">{props.name}</h3>
                    <p className="" id="amount">${props.price}</p>
                </div>
                <div className="" onClick={props.changePrice}>
                    Total: <span className="different">${total}</span>
                </div>
            </div>
        </div>
        <h4 className="" onClick={props.changePrice}>Qty</h4>
        <div className="cartItem-controls" onConfirm={props.clickHandler}>
            <button className="reduce-cartItem" onClick={reduceQty}>-</button>
            <h6 className="cartItem-qty" id="quantity">{quantity}</h6>
            <button className="increase-cartItem" onClick={increaseQty}>+</button>
        </div>
        <div className="cartItem-btn" onClick={props.changePrice}>
            <button className="cart-btn" onClick={props.handleClick}>Remove from Cart</button>
        </div>
    </div>
}

export default CartItem;








// import { useState } from "react";

// function CartItem(props) {
//     const [quantity, setQuantity] = useState(props.quantity);

//     function reduceQty() {
//         if(quantity === 1) {
//             return 1
//         }

//         setQuantity(prevQuantity => {
//             return prevQuantity - 1;
//         })
//     }

//     function increaseQty() {
//         setQuantity(prevQuantity => {
//             return prevQuantity + 1;
//         })
//     }

//     const sumTotal = (quantity * props.price).toFixed(2);

//     return <div className="cartItem-container" id={props.id}>
//         <div className="cartItem-main"> 
//             <img className="cartItem-img" src="../shoe.jpg" alt="A shoe" />
//             <div className="">
//                 <div className="">
//                     <h3 className="">{props.name}</h3>
//                     <p className="" id="amount">${props.price}</p>
//                 </div>
//                 <div className="" onClick={props.changePrice}>
//                     Total: <span className="different">${sumTotal}</span>
//                 </div>
//             </div>
//         </div>
//         <h4 className="" onClick={props.changePrice}>Qty</h4>
//         <div className="cartItem-controls">
//             <button className="reduce-cartItem" onClick={reduceQty}>-</button>
//             <h6 className="cartItem-qty" id="quantity">{quantity}</h6>
//             <button className="increase-cartItem" onClick={increaseQty}>+</button>
//         </div>
//         <div className="cartItem-btn" onClick={props.changePrice}>
//             <button className="cart-btn" onClick={props.handleClick}>Remove from Cart</button>
//         </div>
//     </div>
// }

// export default CartItem;