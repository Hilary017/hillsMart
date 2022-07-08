import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext({
        order: [],
        totalOrder: 0,
        addOrder: (order) => {},
        removeOrder: (orderId) => {},
        itemIsOrder: (orderId) => {},
        reduceQty: () => {},
        increaseQty: () => {},
        sumTotal: () => {},
        total: ""
});

export function CartContextProvider(props) {
    const [userOrder, setUserOrder] = useState([]);
    const [qty, setQty] = useState(1);
 
    const increaseQty = () => {
        setQty(prev => prev + 1);
    }

    const reduceQty = () => {
        setQty(prev => prev - 1);
    }

    let sum;

    const sumTotal = (price) => {
        // sum = (quantity * price).toFixed(2);
        // return sum;
    }

    function addOrderHandler(order) {
        setUserOrder(prevOrder => { 
            return prevOrder.concat(order);
        })  
    }


    function removeOrderHandler(orderId) {
        setUserOrder(prevOrder => {
            return prevOrder.filter(order => order.id !== orderId)
        })
    }

    function itemIsOrderHandler(orderId) {
        return userOrder.some(order => order.id === orderId)
    }

    const context = {
        order: userOrder,
        totalOrder: userOrder.length,
        sumTotal: sumTotal,
        quantity: qty,
        addOrder: addOrderHandler,
        removeOrder: removeOrderHandler,
        itemIsOrder: itemIsOrderHandler, 
        reduceQty: reduceQty,
        increaseQty: increaseQty
    }

    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}


export default CartContext;