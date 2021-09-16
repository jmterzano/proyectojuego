import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'

//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { ErrorComponent } from './page/error/error.component';
import { RegistroComponent } from './page/registro/registro.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent,
    ErrorComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
