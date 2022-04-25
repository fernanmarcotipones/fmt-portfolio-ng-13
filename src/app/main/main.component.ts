import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { leftContentAnimation, rightContentAnimation } from '../shared/content.animation';
import { ContentService } from '../shared/content.service';

@Component({
  selector: 'fmt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    leftContentAnimation,
    rightContentAnimation,
  ]
})
export class MainComponent implements OnInit, AfterViewChecked {

  @ViewChild('content')
  public content!: ElementRef;

  public activeContent: string = 'menu';

  public showContent: boolean = false;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.activeContent = this.contentService.activeContent;
    if (this.content.nativeElement.getBoundingClientRect().top <= 0) {
      setTimeout(() => this.showContent = true);
    }
  }

}
