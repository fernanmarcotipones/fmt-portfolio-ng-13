import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fmt-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
