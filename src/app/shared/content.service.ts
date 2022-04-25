import { Injectable } from "@angular/core";

@Injectable()
export class ContentService {

  public activeContent: string = 'menu';
  
  setActiveContent(content: string) {
    this.activeContent = content;
  }
}