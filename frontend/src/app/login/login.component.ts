import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  redirectToSteamLogin() {
    const baseUrl = 'http://localhost:5005/auth/steam'

    // Redirect the browser to the backend with the callback URL as a query parameter
    window.location.href = `${baseUrl}`
  }



}
