import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Landing} from "./landing/landing.component";
import {LoginComponent} from "./login/login.component";
import {MakechoiceComponent} from "./makechoice/makechoice.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Default route for now
  { path: 'landing', component: Landing},
  { path: 'wizard', component: MakechoiceComponent }
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
