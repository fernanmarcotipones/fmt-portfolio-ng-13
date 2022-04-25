import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { ContentBase } from '../../../shared/content-base';

@Component({
  selector: 'fmt-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent extends ContentBase implements OnInit {

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

}
