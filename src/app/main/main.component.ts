import { Component, OnInit, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class MainComponent implements OnInit, OnDestroy {

  @HostListener('window:scroll', ['$event'])
  track() {
    if (this.content.nativeElement.getBoundingClientRect().top <= 0) {
      this.showContent = true;
    }
  }

  @ViewChild('content')
  public content!: ElementRef;

  public showContent: boolean = false;
  
  public activeContent!: string;

  public contentPosition!: string;

  public contentSub!: Subscription;

  public positionSub!: Subscription;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentSub = this.contentService.activeContent.subscribe(content => {
      this.activeContent = content;
    });

    this.positionSub = this.contentService.contentPosition.subscribe(position => {
      this.contentPosition = position;
    });
  }

  public showSubContent(subComponent: any) {
    subComponent.showContent = true;
  }

  ngOnDestroy(): void {
    this.contentSub.unsubscribe();
    this.positionSub.unsubscribe();
  }
  
}
