// import { createContext, useReducer } from "react";
// import productsReducer from "../reducers/productsReducer";
// import axios from "axios";

// const initialState = {
//   loading: true,
//   products: [],
//   error: null,
// };

// export const ProductsContext = createContext();

// const ProductsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(productsReducer, initialState);
//   //get all products
//   async function getProducts() {
//     const res = await axios.get(
//       "https://sky-press.herokuapp.com/api/v1/products"
//     );
//     try {
//       dispatch({
//         type: "GET_ALL_PRODUCTS",
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <ProductsContext.Provider
//       value={{ getProducts, products: state.products, loading: state.loading }}
//     >
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export default ProductsContextProvider;
