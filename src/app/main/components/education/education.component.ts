import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fmt-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
