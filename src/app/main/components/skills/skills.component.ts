import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { ContentBase } from '../../../shared/content-base';

@Component({
  selector: 'fmt-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent extends ContentBase implements OnInit {

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

}
