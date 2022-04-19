import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [MainComponent, IntroComponent, AboutMeComponent],
  imports: [],
})
export class MainModule { }