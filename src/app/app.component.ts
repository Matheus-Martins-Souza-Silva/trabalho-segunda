import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loginMessage = '';

  onOverLoginButton() {
    this.loginMessage = 'Cadastrar';
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
