import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private auth: AngularFireAuth) {

    auth.authState.subscribe(user=>{
      console.log(user);
    })

  }

  login(user: string, pass: string) {
    return this.auth.signInWithEmailAndPassword(user, pass);
  }

  registrar(user: string, pass: string) {
    return this.auth.createUserWithEmailAndPassword(user, pass);
  }

  logOut(){
    return this.auth.signOut();
  }


}
