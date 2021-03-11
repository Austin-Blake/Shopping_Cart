import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionReducer from './reducer';
  
// items
import cartItems from "../items/cart-items";



//initial store
export const initialStore = {
    cart: cartItems,
    total: 0,
  amount: 0,
  };
  


const store = createStore(actionReducer,
  composeWithDevTools()
);
  
export default store;