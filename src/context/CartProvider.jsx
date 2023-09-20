import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";


const CartContext = createContext();


const CartProvider = ({ children }) => {

    const getLocalCartData = () => {
        let parsedProducts = JSON.parse(localStorage.getItem('cartProduct'));
        if (!Array.isArray(parsedProducts)) return [];
        return parsedProducts;
    };

    let initialState = {
        cart: getLocalCartData(),
        totalItems: '',
        totalAmount: '',
        shippingFee: 50,
    }


    let [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, product, counter, itemStock) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, product, counter, itemStock } })
    };



    const increment = (id) => {
        dispatch({ type: 'INCREMENT', payload: id })
    };

    const decrement = (id) => {
        dispatch({ type: 'DECREMENT', payload: id })
    };



    const removeItem = (id) => {
        dispatch({ type: 'DELETE_TO_CART', payload: id })
    };


    useEffect(() => {
        dispatch({ type: 'CART_SUB_TOTAL_AND_PRICE' });
        localStorage.setItem('cartProduct', JSON.stringify(state.cart))
    }, [state.cart]);


    const clearFilter = () => {
        dispatch({ type: 'CLEAR_CART' })
    };

    return (
        <CartContext.Provider value={{ ...state, addToCart, increment, decrement, removeItem, clearFilter }}>
            {children}
        </CartContext.Provider>
    );

}

const useCartContext = () => {
    return useContext(CartContext)
};

export { CartProvider, useCartContext };
