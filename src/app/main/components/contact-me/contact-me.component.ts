import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fmt-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  @Input()
  public scrollPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
