import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { ContentBase } from '../../../shared/content-base';

@Component({
  selector: 'fmt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends ContentBase implements OnInit {

  public activeContent: string ='menu';

  constructor(contentService: ContentService) {
    super(contentService);
  }

  ngOnInit(): void {
  }

  public changeContent(content: string): void {
    this.contentService.setActiveContent(content);
  }

}
