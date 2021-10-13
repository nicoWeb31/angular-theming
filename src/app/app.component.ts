import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-theming';
  text = 'ma banniere ';
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  chooseTheme(e: string) {
    if (e === 'dark') {
      this.currentTheme = 'dark-theme';
    }
    if (e === 'light') {
      this.currentTheme = 'light-theme';
    }
    console.log(this.currentTheme);
  }
}
