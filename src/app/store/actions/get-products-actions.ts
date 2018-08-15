import { Action } from '@ngrx/store';

export const GET_PRODUCTS = '[Products] Get Products';
export const GET_PRODUCTS_SUCCESS = '[Products] Get Products Success';

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;
    constructor( public payload: any ) {}
}
export class GetProductsSuccess implements Action {
    readonly type = GET_PRODUCTS_SUCCESS;
    constructor( public payload: any ) {}
}

export type AllProducts = GetProducts | GetProductsSuccess;
