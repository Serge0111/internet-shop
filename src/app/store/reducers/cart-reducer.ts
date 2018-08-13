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

export function reducer ( state = initState, action: CartAction.ThrowIntoCart ): CartState {
    switch (action.type) {
        case CartAction.THROW_INTO_CART: {
            if (state.products.length) {
                let index = -1;
                index = state.products.findIndex( (item) => item.id === action.payload.id );
                if (index !== -1) {
                    ++state.products[index].amount;
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
