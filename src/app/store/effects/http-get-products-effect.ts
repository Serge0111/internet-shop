import { ProductCartService } from './../../product-cart.service';
import { Actions, Effect} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {  map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as GetProductsAction from '../actions/get-products-actions';

@Injectable()
export class GetProductsEffect {

    @Effect()
    getProducts$: Observable<Action> = this.action$.ofType(GetProductsAction.GET_PRODUCTS).pipe(
        map((action: GetProductsAction.GetProducts) => action.payload),
        tap(data => console.log(data)),
        switchMap( () => this.productService.getProducts()),
        map( results => new GetProductsAction.GetProductsSuccess(results['products']))
    );
    constructor(
        private action$: Actions,
        private productService: ProductCartService
    ) {}
}
