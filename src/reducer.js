import {
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  TOOGLE_AMOUNT,
} from "./actions";

// items
import cartItems from "./cart-items";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialState, action) {
  // return state;
  // console.log({ state, action });
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
    // if (action.payload.amount === 1) {
    //   tempCart = state.cart.filter(
    //     (cartItem) => cartItem.id !== action.payload.id
    //   );
    // } else {
    //   tempCart = state.cart.map((cartItem) => {
    //     if (cartItem.id === action.payload.id) {
    //       cartItem = { ...cartItem, amount: cartItem.amount - 1 };
    //     }
    //     return cartItem;
    //   });
    // }
    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        // console.log(cartTotal);
        return cartTotal;
      },
      { amount: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === TOOGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }

  // kalo ga di return ga bisa akses state
  return state;
}

export default reducer;
