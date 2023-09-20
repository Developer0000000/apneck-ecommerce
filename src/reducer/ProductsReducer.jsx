const ProductsReducer = (state, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }

        case 'SET_PRODUCTS':
            let productsPrices = action.payload.map((val) => val.price);
            let maxPrice = Math.max(...productsPrices);
            return {
                ...state,
                loading: false,
                products: action.payload,
                AllProducts: action.payload,
                filterProducts: action.payload,
                filter: { ...state.filter, maxPrice, price: maxPrice }
            }

        case 'SET_GRID_VIEW':
            return {
                ...state,
                gridView: true,
            }

        case 'SET_LIST_VIEW':
            return {
                ...state,
                gridView: false,
            }

        case 'GET_SORT_VALUE':
            return {
                ...state,
                sortingValue: action.payload,
            }

        case 'GET_SORT_PRODUCTS':
            let { AllProducts, sortingValue } = state;
            let tempSortProducts = [...AllProducts];

            const filtrationProducts = (a, b) => {

                if (sortingValue === '--Select--') {
                    return a.title.localeCompare(a.title)
                }
                if (sortingValue === 'ascending') {
                    return a.title.localeCompare(b.title);
                }

                if (sortingValue === 'descending') {
                    return b.title.localeCompare(a.title);
                }

                if (sortingValue === 'lowest') {
                    return a.price - b.price
                }

                if (sortingValue === 'highest') {
                    return b.price - a.price
                }

            };

            let filtration = tempSortProducts.sort(filtrationProducts)

            return {
                ...state,
                products: filtration
            }

        case 'UPDATE_FILTER_VALUE':
            let { name, value } = action.payload
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: value
                }
            }

        case 'FILTER_PRODUCTS':

            let { filterProducts } = state;
            let tempFilterProducts = [...filterProducts];

            let { text, category, price } = state.filter;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((val) => {
                    return val.title.toLowerCase().includes(text);
                })
            }

            if (category !== 'all') {
                tempFilterProducts = tempFilterProducts.filter((val) => {
                    return val.category === category;
                })
            }

            if (price) {
                tempFilterProducts = tempFilterProducts.filter((val) => {
                    return val.price <= price;
                })
            }

            return {
                ...state,
                products: tempFilterProducts
            }

        case 'CLEAR_FILTER_PRODUCTS':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: '',
                    category: 'all',
                    maxPrice: 0,
                    maxPrice: state.filter.maxPrice,
                    price: state.filter.maxPrice,
                }
            }

        default:
            return state;
    }

}

export default ProductsReducer
