import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from '../services/constants';

const initialState = {
  cart: [],
  userData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.data],
      };
    case REMOVE_FROM_CART:
      let updatedCart = state.cart.filter(item => item.name !== action.data);
      return {
        ...state,
        cart: updatedCart,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.data,
      };

    default:
      return state;
  }
};
