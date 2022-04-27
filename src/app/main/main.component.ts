import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { bottomContentAnimation, leftContentAnimation, menuAnimation, rightContentAnimation } from '../shared/content.animation';
import { ContentService } from '../shared/content.service';

@Component({
  selector: 'fmt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    menuAnimation,
    leftContentAnimation,
    rightContentAnimation,
    bottomContentAnimation,
  ]
})
export class MainComponent implements OnInit, AfterViewChecked {

  @ViewChild('content')
  public content!: ElementRef;

  public showContent: boolean = false;
  
  public activeContent: string = 'menu';

  public contentPosition: string = 'mid';

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    setTimeout(() => this.activeContent = this.contentService.activeContent);
    setTimeout(() => this.contentPosition = this.contentService.contentPosition);
    
    if (this.content.nativeElement.getBoundingClientRect().top <= 0) {
      setTimeout(() => this.showContent = true);
    }
  }

  onAnimationEvent(event: any) {
    console.log('animation', event);
  }
  
}
