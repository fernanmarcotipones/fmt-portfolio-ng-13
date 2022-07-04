import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/services/content.service';
import { ContentBase } from '../../../shared/components/content-base';

@Component({
  selector: 'fmt-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent extends ContentBase implements OnInit {

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

}
