import { useState } from 'react'
import { cartContext } from './cartContext'

export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([])
   
    const addToCart = product => {
        setCart ([...cart, product])
    }

    const removeFromCart = (prodId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== prodId));
      }

    const getQuantity = () => {
        const qtyOnly = cart.map(prod => prod.qty)
        const total = qtyOnly.reduce((acc,current) => acc + current, 0)
        return total
    }

    const getTotal = () => {
        const pricesOnly = cart.map(prod => prod.qty*prod.price)
        const total = pricesOnly.reduce((acc,current) => acc + current, 0)
        return total
    }

    return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, getQuantity, getTotal }}>
        {children}
    </cartContext.Provider>
    )
}