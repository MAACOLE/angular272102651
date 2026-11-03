import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
  host: {
    class: 'app-sidebar bg-body-secondary shadow',
    'data-bs-theme': 'dark'
  }
})
export class Sidebar {
  @Input() moduleName: string = '';

  classSidebar() {
    if (document.body.classList.contains('sidebar-hidden')) {
      document.body.classList.remove('sidebar-oppen');
      document.body.classList.add('sidebar-collapsed');
    }

  }

}