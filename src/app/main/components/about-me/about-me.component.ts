import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fmt-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, AfterViewChecked {

  @ViewChild('aboutMe')
  public aboutMe!: ElementRef;

  @Input()
  public scrollPosition: number = 0;

  public showContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.aboutMe.nativeElement.getBoundingClientRect().top <= 0) {
      setTimeout(() => {
        this.showContent = true;
      });
    }
  }

}
