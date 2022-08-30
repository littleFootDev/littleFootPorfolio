import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navIsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleNav() {
    this.navIsOpen = !this.navIsOpen;
  }
}
