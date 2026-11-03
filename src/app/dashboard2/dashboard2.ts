import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-dashboard2',
  standalone: true,
  imports: [RouterModule, Navbar, Sidebar, Footer],
  styleUrl: './dashboard2.css',
  templateUrl: './dashboard2.html',
})
export class Dashboard2 {}