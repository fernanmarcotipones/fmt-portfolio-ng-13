import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/services/content.service';
import { ContentBase } from '../../../shared/components/content-base';

@Component({
  selector: 'fmt-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent extends ContentBase implements OnInit {

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

}
