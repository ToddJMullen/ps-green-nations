import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set item( item ){
    this.item = item;
  }

}
