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

  constructor(protected contentService: ContentService) { }

  public backToMenu(): void {
    this.contentService.setActiveContent('menu');
  }
}