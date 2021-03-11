import { createSlice } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import {REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT} from '../actions';

const slice = createSlice({
    name: 'cart',
    initialState: initialStore,
    reducers: {
        switch (action.type) {
        
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
            let { total, amount } = state.cart.reduce(
                (cartTotal, item) => {
                    const { price, amount } = item;
                    const itemTotal = price * amount;

                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;

                    return cartTotal;
                },
                {
                    total: 0,
                    amount: 0
                })
            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                total,
                amount,
    
            }
        case TOGGLE_AMOUNT:
            
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id && action.payload.toggle === 'DECREMENT') {
                        return item = { ...item, amount: item.amount - 1 };
                        
                    } else if (item.id === action.payload.id && action.payload.toggle === 'INCREMENT') {
                        return item = { ...item, amount: item.amount + 1 };
                    } else {
                        return item;
                    }
                })
    
                }
        default:
            return state;
    }
    },
})

export default slice.reducer;