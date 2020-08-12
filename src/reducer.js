import { DECREASE, INCREASE } from "./actions";

function reducer(state, action) {
  // return state;
  console.log({ state, action });

  // kalo ga di return ga bisa akses state
  return state;
}

export default reducer;
