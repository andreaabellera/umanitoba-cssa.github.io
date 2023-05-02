import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: 'src/app/navigation-bar/navigation-bar.component.html',
  styleUrls: ['src/app/navigation-bar/navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  activeMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeNavMenu() {
    this.activeMenu = false;
  }

  openNavMenu() {
    this.activeMenu = true;
  }
}
