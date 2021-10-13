import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() message: string = '';
  @Input() type: 'success' | 'info' | 'err' | 'none' = 'none';

  @HostBinding('class')
  get hostClass() {
    if (this.type !== 'none') {
      return `app-banner-${this.type}`;
    }
    return;
  }

  constructor() {}

  ngOnInit(): void {}
}
