export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOOGLE_AMOUNT = "TOOGLE_AMOUNT";
// action with functiom
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
