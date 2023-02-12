import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'principal', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
