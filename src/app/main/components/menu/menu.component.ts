import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fmt-about-me',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewChecked {

  @ViewChild('menu')
  public menu!: ElementRef;

  @Input()
  public scrollPosition: number = 0;

  public showContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (this.menu.nativeElement.getBoundingClientRect().top <= 0) {
      setTimeout(() => {
        this.showContent = true;
      });
    }
  }

}
