import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../experience';
import { EXPERIENCE } from '../experience-list';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

@Input() bodyObject: { };

experiences = EXPERIENCE

  constructor() { }

  ngOnInit() {
  }

}
