import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component:  LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'register', component:  RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
