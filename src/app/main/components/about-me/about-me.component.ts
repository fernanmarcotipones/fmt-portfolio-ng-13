import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { ContentBase } from '../../../shared/content-base';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { leftContentAnimation } from 'src/app/shared/content.animation';

interface TimelineScope {
  min: number;
  max: number;
}

@Component({
  selector: 'fmt-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [leftContentAnimation],
})
export class AboutMeComponent extends ContentBase implements OnInit {

  @HostListener('window:scroll', ['$event'])
  override track(): void {
    if (this.aboutMe.nativeElement.getBoundingClientRect().top <= 0) {
      this.showTimeline = true;
      this.scrollPosition = this.aboutMe.nativeElement.getBoundingClientRect().top * -1;
    } else {
      this.showTimeline = false;
      this.scrollPosition = 0;
    }

    this.timelineHeight = this.aboutMe.nativeElement.getBoundingClientRect().height / this.aboutMeData.length;
    this.maxTop = this.aboutMe.nativeElement.getBoundingClientRect().height - this.timelineHeight;

    console.log('about me scroll', this.scrollPosition);
  }

  @ViewChild('aboutMe')
  public aboutMe!: ElementRef;

  public maxTop!: number;

  public timelineHeight!: number

  public showTimeline: boolean = false;

  public backButtonIcon: IconProp = faChevronRight;

  private mockImages: string[] = [
    'assets/images/timeline1.jpg',
    'assets/images/timeline2.jpg',
    'assets/images/timeline3.jpg',
  ];

  public aboutMeData: any[] = [
    { title: 'Early Life', content: 'content-1', year: '1994', images: this.mockImages },
    { title: 'Growing up in Indonesia', content: 'content-2', year: '1995', images: this.mockImages },
    { title: 'Back to Philippines', content: 'content-3', year: '2008', images: this.mockImages },
    { title: 'Graduated in Naga City', content: 'content-4', year: '2016', images: this.mockImages },
    { title: 'Working in Makati', content: 'content-5', year: '2017', images: this.mockImages },
  ];

  public get totalHeight(): number {
    return this.aboutMeData ? this.aboutMeData.length * 100 : 100;
  }

  public get coverPosition(): number {
    return (this.scrollPosition / this.maxTop) * 100;
  }

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

  public getTimelineScope(index: number): TimelineScope {
    const min = this.timelineHeight * index;
    const max = min + this.timelineHeight;
    const scope: TimelineScope = { min, max }

    return scope;
  }

  public showTimelineContent(index: number): boolean {
    if (this.scrollPosition < 0) {
      return false;
    }

    const timelineScope: TimelineScope = this.getTimelineScope(index);
    return this.scrollPosition >= timelineScope.min && this.scrollPosition < timelineScope.max;
  }

  public scrollToTimeline(index: number): void {
    const timelineScope: TimelineScope = this.getTimelineScope(index);
    window.scrollTo(0,timelineScope.max);
  }

}
