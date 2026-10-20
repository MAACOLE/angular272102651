import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. Impor dari @angular/router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // 2. Tambahkan ke dalam array imports
  templateUrl: './login.html',
  styleUrls: ['./login.css'] 
})
export class Login {
  // ... isi kode class Login kamu
}