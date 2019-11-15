import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Input() headerObject: { };

headerStuff = {
  name: 'Jordan Varner',
  email: 'jdv1005@sru.edu',
  phone: '867-5309',
  address: '324 RealPlace Rd.'
  
}

  constructor() { }

  ngOnInit() {
  }

}
