const CartReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_CART':
            let { id, product, counter, itemStock } = action.payload;
            let { title, image, price } = product;

            let existingProduct = state.cart.find((item) => item.id === id + title);

            if (existingProduct) {

                let updatedProduct = state.cart.map((item) => {
                    if (item.id === id + title) {
                        let newCounter = item.counter + counter;

                        if (newCounter >= item.max) {
                            newCounter = item.max;
                        }

                        return {
                            ...item,
                            counter: newCounter
                        }
                    } else {
                        return item
                    }
                });

                return {
                    ...state,
                    cart: updatedProduct
                }

            } else {
                let cartProductData = {
                    counter,
                    image,
                    price,
                    id: id + title,
                    title: title,
                    max: itemStock
                }

                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        cartProductData
                    ]
                }
            }

        case 'DECREMENT':

            let updatedMinusProduct = state.cart.map((item) => {

                if (item.id === action.payload) {
                    let decCounter = item.counter - 1;
                    if (decCounter <= 1) {
                        decCounter = 1
                    }
                    return {
                        ...item,
                        counter: decCounter
                    }
                } else {
                    return item
                }

            });

            return {
                ...state,
                cart: updatedMinusProduct
            }

        case 'INCREMENT':

            let updatedAddProduct = state.cart.map((item) => {

                if (item.id === action.payload) {
                    let incCounter = item.counter + 1;
                    if (incCounter > item.max) {
                        incCounter = item.max
                        alert(`At that time, we've only ${item.max} items of this product. If you want to buy more products, contact us via Email or Phone.`);
                    }
                    return {
                        ...item,
                        counter: incCounter
                    }
                } else {
                    return item
                }

            });

            return {
                ...state,
                cart: updatedAddProduct
            }

        case 'CART_SUB_TOTAL_AND_PRICE':

            let { totalItems, totalAmount } = state.cart.reduce((acc, item) => {
                let { price, counter } = item;
                acc.totalItems += counter;
                acc.totalAmount += price * counter;
                return acc
            }, { totalAmount: 0, totalItems: 0 });

            return {
                ...state,
                totalItems,
                totalAmount,
            }


        case 'DELETE_TO_CART':
            let { cart } = state;

            let deleteItem = cart.filter((item) => item.id !== action.payload)

            return {
                ...state,
                cart: deleteItem

            }

        case 'CLEAR_CART':

            return {
                ...state,
                cart: [],
                totalItem: '',
                totalAmount: '',
                shippingFee: '',
            }

        default:
            return state;
    }

}

export default CartReducer
