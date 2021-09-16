import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { RegistroComponent } from './page/registro/registro.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'quien-soy',component:QuienSoyComponent},
  {path:'registro',component:RegistroComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
