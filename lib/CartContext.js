import React, { useContext, useState } from 'react'

// Creating the empty cart context

// Creating the cart context "https://www.bundleapps.io/blog/nextjs-context-api-tutorial"
export const CartContext = React.createContext({
    cart: {},
    setCart: async (cart) => null,
})

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({})

    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}