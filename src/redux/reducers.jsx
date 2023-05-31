let idCount = 1;

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: { ...product, id: idCount + 1 }
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product
  };
};

export const deleteProduct = (id) => {
  return {
    type: "-",
    payload: id
  };
};
const initialState = {
  products: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
