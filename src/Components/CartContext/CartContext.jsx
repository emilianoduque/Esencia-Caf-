import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const cartSaved = localStorage.getItem("productosCartEsenciaCafé");
        return cartSaved ? JSON.parse(cartSaved) : [];
    });

    const addProductInCart = (newProduct) => {
        const condition = isInCart(newProduct.id)
        if(condition){
            const tempCart = [...cart];
            const findIndex = tempCart.findIndex((product) =>  product.id === newProduct.id)
            tempCart[findIndex].quantity += newProduct.quantity

            setCart(tempCart);
        } else {
            setCart([...cart, newProduct])
        }
    }

    useEffect(() => {
        localStorage.setItem("productosCartEsenciaCafé", JSON.stringify(cart));
    }, [cart]);

    const isInCart = (idProduct) => {
        return cart.some((product) => product.id === idProduct)
    }

    const totalQuantity = () =>{
        const quantity = cart.reduce((acc, product) => acc += product.quantity, 0)
        return quantity;
    }

    const totalPrice = () => {
        const price = cart.reduce((acc, product) => acc += (product.quantity * product.precio), 0)
        return price;
    }

    const deleteCart = () => {
        setCart([]);
    }

    const deleteProductById = (idProduct) => {
        const findIndex = cart.findIndex((product) => product.id === idProduct)
        const tempCart = [...cart];
        if(tempCart[findIndex].quantity > 1){
            tempCart[findIndex].quantity -= 1;
            setCart(tempCart);
        } else {
            const filterProducts = cart.filter((product) => product.id !== idProduct);
            setCart(filterProducts);
        }
    }

    return (
        <CartContext.Provider value={{cart, addProductInCart, totalPrice, totalQuantity, deleteCart, deleteProductById}}>
            {children}
        </CartContext.Provider>
    )
    }

    export {CartContext, CartProvider}

