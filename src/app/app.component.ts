import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
    <!-- header -->
    <gamachicas-header></gamachicas-header>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <gamachicas-footer></gamachicas-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gamachicas';

}
