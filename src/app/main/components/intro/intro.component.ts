import { Component, Input, OnInit } from '@angular/core';
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
export class IntroComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;

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

  constructor() { }

  ngOnInit(): void {
  }

}
