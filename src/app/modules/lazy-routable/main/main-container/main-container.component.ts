
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const SOCIAL_BUTTONS = [
  { name: 'facebook', link: '#' },
  { name: 'instagram', link: '#' },
  { name: 'linkedin', link: '#' }
];

const FOOTER_MENU_ITEMS = [
  {
    title: 'Title',
    items: [ { uiName: 'link', link: '#' }, { uiName: 'link', link: '#' }, { uiName: 'link', link: '#' } ]
  }, {
    title: 'Title',
    items: [ { uiName: 'link', link: '#' }, { uiName: 'link', link: '#' }, { uiName: 'link', link: '#' } ]
  }, {
    title: 'Title',
    items: [ { uiName: 'link', link: '#' }, { uiName: 'link', link: '#' }, { uiName: 'link', link: '#' } ]
  }
];

const PRODUCTS = [
  { background: '/assets/img/png/service-bg.png', title: 'CARD1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', button: 'TEST' },
  { background: '/assets/img/png/service-bg.png', title: 'CARD1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', button: 'TEST' },
  { background: '/assets/img/png/service-bg.png', title: 'CARD1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', button: 'TEST' },
  { background: '/assets/img/png/service-bg.png', title: 'CARD1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', button: 'TEST' }
];

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {

  public socialButtons = SOCIAL_BUTTONS;
  public footerItems = FOOTER_MENU_ITEMS;
  public productCards = PRODUCTS;

  public isScrollBtnVisible = true;

  constructor() { }

  ngOnInit(): void { }

}
