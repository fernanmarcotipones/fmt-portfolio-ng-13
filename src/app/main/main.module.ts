import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { IntroComponent } from './components/intro/intro.component';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  declarations: [
    MainComponent,
    IntroComponent,
    MenuComponent,
    AboutMeComponent,
    EducationComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
})
export class MainModule { }