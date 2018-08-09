import { RegistrationOrderComponent } from './registration-order/registration-order.component';
import { ProductsComponent } from './products/products.component';
export const routes = [
    { path: '', component: ProductsComponent },
    { path: 'registration-order', component: RegistrationOrderComponent }
];
