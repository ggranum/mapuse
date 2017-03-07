import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  active = '';

  constructor() { }
  toggleMenu() {
    this.active = this.active === 'active' ? '' : 'active';
  }

  ngOnInit() {
  }

}
