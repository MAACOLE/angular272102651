import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, Navbar, Sidebar, Footer],
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}