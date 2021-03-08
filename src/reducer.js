
import { DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT} from './actions';

//reducer
export const reducer = (state, action) => {

    switch (action.type) {
        case INCREASE:
            let tempCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount + 1 }
                }
                return item;
            });
            return {
                ...state,
                cart: tempCart,
            }
        case DECREASE:
            let tempCart2 = [];
            if (action.payload.amount === 1) {
                tempCart2 = state.cart.filter(item => {
                    return item.id !== action.payload.id
                }
                );
            } else {
                tempCart2 = state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        item = { ...item, amount: item.amount - 1 };
                    }
                    return item;
                });
            }
                return {
                    ...state,
                    cart: tempCart2,
                }
            
            case REMOVE:
            return {
                    ...state,
                cart: state.cart.filter(item => {
                 return   item.id !== action.payload.id;
                })
            }
            case CLEAR_CART:
                return {
                    ...state,
                    cart: [],
            }
            case GET_TOTALS:
            return {
                ...state,
                
    
            }
            case TOGGLE_AMOUNT:
            return {
                ...state,
                
    
                }
        default:
            return state;
    }
    
  }