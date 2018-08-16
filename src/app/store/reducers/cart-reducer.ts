import * as CartAction from '../actions/cart-actions';
import * as _ from '../../interfaces/products-interface';

export interface CartState {
    isEmpty: boolean;
    products: _.Products[];
}

const initState: CartState = {
    isEmpty: true,
    products: []
};

export function reducer ( state = initState, action: CartAction.Product ): CartState {
    switch (action.type) {
        case CartAction.REMOVE_FROM_CART: {
            return {
                ...state,
                products: state.products.filter( (product: _.Products) => product.id !== action.payload)
            };
        }
        case CartAction.THROW_ALL_INTO_CART: {
            return {
                isEmpty: action.payload !== null ? false : true,
                products: action.payload !== null ? [...action.payload] : []
            };
        }
        case CartAction.THROW_INTO_CART: {
            if (state.products.length) {
                let index: number;
                index = state.products.findIndex( (item: _.Products) => item.id === action.payload.id );
                if (index !== -1) {
                    return state;
                }
            }
            return {
                ...state,
                isEmpty: false,
                products: [...state.products, action.payload]
            };
        }
        default: {
            return state;
        }
    }
}
