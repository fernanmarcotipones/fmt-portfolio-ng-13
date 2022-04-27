import { Injectable } from "@angular/core";

@Injectable()
export class ContentService {

  public activeContent: string = 'menu';

  public contentPosition: string = 'mid';
  
  public setActiveContent(content: string) {
    this.activeContent = content;
  }

  public setContentPosition(position: string): void {
    this.contentPosition = position;
  }
}