import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'fmt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('content')
  public content!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  track(event: Event) {
    this.scrollPosition = window.pageYOffset;

    if (this.content.nativeElement.getBoundingClientRect().top <= 0) {
      this.showContent = true;
    }
  }

  public scrollPosition: number = 0;

  public showContent: boolean = false;

  public activeContent: string = 'menu';

  constructor() { }

  ngOnInit(): void {
  }

}
