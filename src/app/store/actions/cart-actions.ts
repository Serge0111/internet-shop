import { Action } from '@ngrx/store';
import * as _ from '../../interfaces/products-interface';

export const THROW_INTO_CART = '[Cart] Throw Into Cart';
export const REMOVE_FROM_CART = '[Cart] Remove From Cart';

export class ThrowIntoCart implements Action {
    readonly type = THROW_INTO_CART;
    constructor(public payload: _.Products) {}
}
export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;
    constructor (public productId: number ) {}
}

export type Product = ThrowIntoCart | RemoveFromCart;
