import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

const cart = [];

export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //Check if item is already in cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increase Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            aty: 1,
          },
        ];
      }
      break;
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};
