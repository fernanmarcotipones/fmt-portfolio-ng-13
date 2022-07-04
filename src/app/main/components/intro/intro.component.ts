import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/shared/services/content.service';
import { ContentBase } from '../../../shared/components/content-base';
import { introImageAnimation, introInfoAnimation } from './intro.animation';

@Component({
  selector: 'fmt-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    introInfoAnimation,
    introImageAnimation,
  ],
})
export class IntroComponent extends ContentBase implements OnInit {

  @HostListener('window:scroll', ['$event'])
  override track(): void {
    if (this.intro.nativeElement.getBoundingClientRect().bottom >= 0) {
      this.scrollPosition = window.pageYOffset;
    }
  }

  @ViewChild('intro')
  public intro!: ElementRef;

  public get parallaxBG(): number {
    return this.scrollPosition * -2;
  }

  public get parallaxElements(): number {
    return this.scrollPosition / -2;
  }

  public get parallaxOpacity(): number {
    return 100 - (this.scrollPosition / 10);
  }

  public get parallaxScale(): number {
    return 1 - (this.scrollPosition / 1000);
  }

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

}
