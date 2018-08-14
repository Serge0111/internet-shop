import {createFeatureSelector, createSelector} from '@ngrx/store';

export const getAllproducts = createSelector(
    createFeatureSelector<any>('Products'),
    (products: any) => {
        return products.results;
    }
);
