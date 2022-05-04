import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { ContentBase } from '../../../shared/content-base';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { leftContentAnimation } from 'src/app/shared/content.animation';

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
      this.scrollPosition = this.aboutMe.nativeElement.getBoundingClientRect().top * -1;
    } else {
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

  public backButtonIcon: IconProp = faChevronRight;

  public aboutMeData: any[] = [
    { title: 'Early Life', content: 'content-1', year: '1994' },
    { title: 'Growing up in Indonesia', content: 'content-2', year: '1995' },
    { title: 'Back to Philippines', content: 'content-3', year: '2008' },
    { title: 'Graduated in Naga City', content: 'content-4', year: '2016' },
    { title: 'Working in Makati', content: 'content-5', year: '2017' },
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

  public showTimeline(index: number): boolean {
    if (this.scrollPosition === 0) {
      return false;
    }

    const minHeight = this.timelineHeight * index;
    const maxHeight = minHeight + this.timelineHeight;
    
    return this.scrollPosition >= minHeight && this.scrollPosition < maxHeight;
  }

}
