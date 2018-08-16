import { Action } from '@ngrx/store';
import * as _ from '../../interfaces/products-interface';

export const THROW_INTO_CART = '[Cart] Throw Into Cart';
export const THROW_ALL_INTO_CART = '[Cart] Throw All Into Cart';
export const REMOVE_FROM_CART = '[Cart] Remove From Cart';

export class ThrowIntoCart implements Action {
    readonly type = THROW_INTO_CART;
    constructor(public payload: _.Products) {}
}
export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;
    constructor (public payload: number ) {}
}
export class ThrowAllIntoCart {
    readonly type = THROW_ALL_INTO_CART;
    constructor(public payload: _.Products[] | null) {}
}

export type Product = ThrowIntoCart | RemoveFromCart | ThrowAllIntoCart;
