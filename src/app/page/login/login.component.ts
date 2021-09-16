import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: JuegoService,private router:Router) { }

  ngOnInit(): void {
  }

  async login(user: string, pass: string) {
    try {
      const logeado = await this.auth.login(user, pass);
      if(logeado){
        this.router.navigate(['/home']);
      }
    } catch (e: any) {
      alert(e.messege);
    }
  }

  
  async registrar(user: string, pass: string) {
    try {
      await this.auth.registrar(user, pass);
    } catch (e: any) {
      alert(e.messege);
      alert("mensaje erroneo");
    }
  }

}
