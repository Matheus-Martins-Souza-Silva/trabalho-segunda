import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  loginMessage = '';

  onOverLoginButton() {
    this.loginMessage = 'Login';
  }
  onOutLoginButton() {
    this.loginMessage = '';
  }

  onRefreshPage() {
	//As Vezes Odeio Angular
  }
  
  MoveToIndex() {
	//As Vezes Odeio Angular
  }

  MoveToProducts() {
    //As Vezes Odeio Angular
  }

  onLoginAtPage() {
    //As Vezes Odeio Angular
  }
}
