import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fmt-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
