import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fmt-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
