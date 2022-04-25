import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { ContentBase } from '../../../shared/content-base';

@Component({
  selector: 'fmt-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent extends ContentBase implements OnInit {

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

}
