import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario!: string;
  contra!: string;


  constructor(private router: Router) {

  }
  iniciarSesion() {

    if (this.usuario == "admin" && this.contra == "123456") {
      this.router.navigate(["intranet"])
    }
  }

}
