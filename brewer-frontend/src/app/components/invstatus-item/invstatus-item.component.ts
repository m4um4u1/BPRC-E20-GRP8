import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-invstatus-item',
  templateUrl: './invstatus-item.component.html',
  styleUrls: ['./invstatus-item.component.css']
})

export class InvstatusItemComponent implements OnInit {

  @Input('value') value: number;
  @Input('type') beertype: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
