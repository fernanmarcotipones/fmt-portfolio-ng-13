import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { IntroComponent } from './components/intro/intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    IntroComponent,
    MenuComponent,
  ],
  imports: [CommonModule],
})
export class MainModule { }