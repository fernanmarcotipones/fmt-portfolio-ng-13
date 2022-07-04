import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TestDirective,
  ],
  exports: [
    TestDirective,
  ],
})
export class DirectivesModule {
}
