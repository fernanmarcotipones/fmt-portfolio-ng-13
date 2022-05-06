import { Component, HostListener } from "@angular/core";
import { ContentService } from "./content.service";

@Component({
  template: '',
})
export class ContentBase {

  @HostListener('window:scroll', ['$event'])
  track() {
    this.scrollPosition = window.pageYOffset;
  }

  public scrollPosition: number = 0;

  public showContent: boolean = false;

  constructor(protected contentService: ContentService) { }

  public backToMenu(element: HTMLElement): void {
    console.log('back', element);
    
    element.scrollIntoView();
    const delay = (element.getBoundingClientRect().top * -1) / 20;

    setTimeout(() => {
      this.contentService.setActiveContent('menu');
    }, delay)
  }
}