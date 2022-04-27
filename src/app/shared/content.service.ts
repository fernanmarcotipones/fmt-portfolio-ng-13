import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ContentService {

  public activeContent = new BehaviorSubject<string>('menu');

  public contentPosition = new BehaviorSubject<string>('mid');

  public setActiveContent(content: string): void {
    this.activeContent.next(content);
  }

  public setContentPosition(position: string): void {
    this.contentPosition.next(position);
  }
}