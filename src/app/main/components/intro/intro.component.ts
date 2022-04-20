import { Component, Input, OnInit } from '@angular/core';
import { introInfoAnimation } from './intro.animations';

@Component({
  selector: 'fmt-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    introInfoAnimation,
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

  constructor() { }

  ngOnInit(): void {
  }

}
