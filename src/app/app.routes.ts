import { Routes } from '@angular/router';
import { Profile } from './profile/profile';

export const routes: Routes = [


{
    path : "",
    pathMatch : "full",
    redirectTo : "home"
},
{
    path : "home",
    loadComponent : () => import("./home/home").then(m => m.Home)

},
{
    path : "details",
    loadComponent : () => import("./details/details").then(m => m.Details)

},
{
    path : "profile",
    loadComponent : () => import("./login/login").then(m => m.Login)

},
{
    path : "profile",
    loadComponent : () => import("./register/register").then(m => m.Register)

},

{
    path : "cart",
    loadComponent : () => import("./cart/cart").then(m => m.Cart)

},
{
    path : "login",
    loadComponent : () => import("./profile/profile").then(m => m.Profile)

},
{
    path : "**",
     loadComponent : () => import("./error/error").then(m => m.Error)
     
}


];




