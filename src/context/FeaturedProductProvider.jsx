import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/FeaturedProductReducer'


const FeaturedProductContext = createContext();

const FeaturedProductProvider = ({ children }) => {

  let initialState = {
    loading: false,
    featureProducts: [],
    singleProduct: [],
  }

  let [state, dispatch] = useReducer(reducer, initialState);


  const getFeatureProducts = async () => {

    dispatch({ type: 'SET_LOADING' });
    let res = await fetch('https://fakestoreapi.com/products?limit=3');
    let data = await res.json();
    dispatch({ type: 'API_PRODUCTS', payload: data });

  };

  useEffect(() => {
    getFeatureProducts()
  }, []);


  const getSingleProduct = async (API) => {
    dispatch({ type: 'SET_LOADING' });
    let res = await fetch(API);
    let data = await res.json();
    dispatch({ type: 'SINGLE_API_PRODUCTS', payload: data });
  };


  return (
    <FeaturedProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </FeaturedProductContext.Provider>
  );

}

const useFeaturedProductContext = () => {
  return useContext(FeaturedProductContext)
};

export { FeaturedProductProvider, useFeaturedProductContext };