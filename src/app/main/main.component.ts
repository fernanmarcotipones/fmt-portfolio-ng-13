import { Component, OnInit, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Subscription } from 'rxjs';
import { bottomContentAnimation, leftContentAnimation, menuAnimation, rightContentAnimation } from '../shared/animations/content.animation';
import { ContentService } from '../shared/services/content.service';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

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

    this.checkBottomPage()
  }
    

  @ViewChild('content')
  public content!: ElementRef;

  @ViewChild('main')
  public main!: ElementRef;

  public showContent: boolean = false;
  
  public activeContent!: string;

  public contentPosition!: string;

  public contentSub!: Subscription;

  public positionSub!: Subscription;

  public scrollDownIcon: IconProp = faAngleDoubleDown;

  public isBottomPage: boolean = false;

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
    this.checkBottomPage();
  }

  public checkBottomPage(): void {
    if (this.main) {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const maxHeight = this.main.nativeElement.scrollHeight;
      this.isBottomPage = scrollPosition === maxHeight;
    }
  }

  ngOnDestroy(): void {
    this.contentSub.unsubscribe();
    this.positionSub.unsubscribe();
  }
  
}
