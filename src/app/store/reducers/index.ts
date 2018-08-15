import { ActionReducerMap } from '@ngrx/store';

import * as fromGetProducts from './get-products-reducer';
import * as cart from './cart-reducer';


export interface State {
    Products: fromGetProducts.State;
    Cart: cart.CartState;
}

export const reducers: ActionReducerMap<State> = {
    Products: fromGetProducts.reducer,
    Cart: cart.reducer
};
