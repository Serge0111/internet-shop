import * as GetProductActions from '../actions/get-products-actions';
import * as ProductsInterface from '../../interfaces/products-interface';

export interface State {
    http: boolean;
    results: ProductsInterface.Products[];
}

const initialState: State = {
    http: false,
    results: []
};

export function reducer ( state = initialState, action: GetProductActions.AllProducts): State {
    switch (action.type) {
        case GetProductActions.GET_PRODUCTS: {
            return {
                ...state,
                http: action.payload
            };
        }
        case GetProductActions.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                results: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

