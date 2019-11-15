import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

@Input() footerObject: { };

footerStuff = {
  stuff: "Enjoy this amazing picture of me. (top)"
}
  constructor() { }

  ngOnInit() {
  }

}
