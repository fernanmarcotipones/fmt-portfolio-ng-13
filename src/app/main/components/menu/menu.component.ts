import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fmt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;
  
  @Input()
  public activeContent: string ='menu';

  @Output()
  public activeContentChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public changeContent(content: string): void {
    this.activeContentChange.emit(content);
  }

}
