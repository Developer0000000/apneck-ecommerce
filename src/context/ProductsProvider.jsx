import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductsReducer'


const ProductsContext = createContext();



const ProductsProvider = ({ children }) => {

    let initialState = {
        products: [],
        AllProducts: [],
        filterProducts: [],
        loading: false,
        gridView: true,
        sortingValue: '',
        filter: {
            text: '',
            category: 'all',
            maxPrice: 0,
            minPrice: 0,
            price: 0,
        }
    }

    let [state, dispatch] = useReducer(reducer, initialState)


    const getProducts = async () => {
        dispatch({ type: 'SET_LOADING' });
        let res = await fetch('https://fakestoreapi.com/products');
        let data = await res.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
    };

    useEffect(() => {
        getProducts();
    }, []);



    const setGridView = () => {
        dispatch({ type: 'SET_GRID_VIEW' });
    };

    const setListView = () => {
        dispatch({ type: 'SET_LIST_VIEW' });
    };


    const sorting = (event) => {
        let { value } = event.target;
        dispatch({ type: 'GET_SORT_VALUE', payload: value });
    };

    useEffect(() => {
        dispatch({ type: 'GET_SORT_PRODUCTS' });
    }, [state.sortingValue]);


    const updateFilterValue = (event) => {
        let { name, value } = event.target;
        dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
    };


    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' });
    }, [state.filter]);

    const clearFilter = () => {
        dispatch({ type: 'CLEAR_FILTER_PRODUCTS' });
    };


    return (
        <ProductsContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilter }}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProductsProvider = () => {
    return useContext(ProductsContext);
};

export { ProductsProvider, useProductsProvider };
