import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Navbar } from '../navbar/navbar'; 
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-admin',
  imports: [ Navbar, Sidebar, RouterOutlet, Footer ], 
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}