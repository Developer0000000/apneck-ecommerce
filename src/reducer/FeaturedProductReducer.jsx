const ProductReducer = (state, action) => {

    switch (action.type) {

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }

        case 'API_PRODUCTS':
            return {
                ...state,
                featureProducts: action.payload,
                loading: false,
            }

        case 'SINGLE_API_PRODUCTS':
            return {
                ...state,
                singleProduct: action.payload,
            }

        default:
            return state;
    }

}

export default ProductReducer
