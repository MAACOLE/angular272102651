import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar'; 
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-admin',
  imports: [ Navbar, Sidebar, Content, Footer ], 
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}