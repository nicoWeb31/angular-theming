import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly themeAchor = this.document.getElementById('app-theme');
  title = 'angular-theming';
  text = 'ma banniere ';
  // @HostBinding('class')
  // currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendered: Renderer2
  ) {}

  ngOnInit() {
    // this.rendered.removeClass(this.document.body, 'light-theme');
    // this.rendered.addClass(this.document.body, 'dark-theme');
  }

  chooseTheme(e: string) {
    if (e === 'dark') {
      // this.currentTheme = 'dark-theme';
      // this.rendered.removeClass(this.document.body, 'light-theme');
      // this.rendered.addClass(this.document.body, 'dark-theme');
      this.rendered.setAttribute(this.themeAchor, 'href', '/dark-theme.css');
    }
    if (e === 'light') {
      // this.currentTheme = 'light-theme';
      // this.rendered.removeClass(this.document.body, 'dark-theme');
      // this.rendered.addClass(this.document.body, 'light-theme');
      this.rendered.setAttribute(this.themeAchor, 'href', '/light-theme.css');
    }
    // console.log(this.currentTheme);
  }
}
