import { Action } from '@ngrx/store';
import * as _ from '../../interfaces/products-interface';

export const THROW_INTO_CART = '[Cart] Throw Into Cart';

export class ThrowIntoCart implements Action {
    readonly type = THROW_INTO_CART;
    constructor(public payload: _.Products) {}
}
export type Product = ThrowIntoCart;
