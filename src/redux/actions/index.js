// For Add Item In Cart

export const addToCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//For Delete The Item From Cart
export const deleteFromCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
