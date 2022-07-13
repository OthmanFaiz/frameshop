import React, { useContext, useState } from 'react'

// Creating the empty cart context

// Creating the cart context "https://www.bundleapps.io/blog/nextjs-context-api-tutorial"
export const CartContext = React.createContext({
    cart: {},
    setCart: async (cart) => null,
    userLoggedIn: false,
    setUserLoggedIn: async (userLoggedIn) => null,
    user: {},
    setUser: async (user) => null,
})

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({})
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    return <CartContext.Provider value={{ cart, setCart , userLoggedIn, setUserLoggedIn, user, setUser }}>{children}</CartContext.Provider>
}