import React, { useState, useEffect } from 'react'
import Formulario from '../formulario/Formulario'
import CartContext from '../context/CartContext'
import NoProductMessage from './NoProductMessage'
import MessageOrden from './MessageOrden'
import TableCart from './TableCart'
import Datetime from 'react-datetime';
import { getFirestore, addDoc, collection, getDocs, docs, getDoc } from "firebase/firestore";


const Cart = () => {
    

    const { cartItem, costoTotal, resetCantCart } =
        React.useContext(CartContext)

    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState(null)

   /*  if (cartItem.length === 0 && orderId === null) {
        return <NoProductMessage />
    } */

    async function createOrder(buyer) {
        const db = getFirestore()
        const orders = collection (db, "ordenes")
        const newOrder = {
            buyer,
            Items: cartItem,  
            date: new Date().toDateString("en-US"),        
            total: costoTotal(),
        }
        addDoc(orders, newOrder).then (({ id }) => setOrderId (id));

        
        resetCantCart()
    } 
    
    console.log( orderId)

    if (orderId) {
        return <MessageOrden orderId={orderId} />
    }
    return (
        <>
            {showForm ? (
                <>
                    <Formulario createOrder={createOrder} />
                   
                </>
            ) : (
                <>
                    <TableCart setShowForm={setShowForm} />
                   
                </>
            )}
        </>
    )
}

export default Cart

