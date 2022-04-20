import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'fmt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  track(event: Event) {
      this.scrollPosition = window.pageYOffset;
  }

  public scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
