import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';

export const routes: Routes = [
  // Halaman default saat web baru dibuka langsung diarahkan ke login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Halaman login (berdiri sendiri, tanpa navbar/sidebar)
  { path: 'login', component: Login },
  
  // Layout Admin sebagai pembungkus (induk)
  { 
    path: '', 
    component: Admin, 
    children: [
      // Kalau user iseng ketik /admin, langsung lempar ke dashboard
      { path: 'admin', redirectTo: 'dashboard', pathMatch: 'full' },
      
      // Halaman anak yang akan masuk ke dalam <router-outlet> di admin
      { path: 'dashboard', component: Dashboard },
      { path: 'dashboard2', component: Dashboard2 },
    ]
  }
];