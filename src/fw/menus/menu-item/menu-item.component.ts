import { Component, OnInit, Input } from '@angular/core';

// import { MenuItem } from '../../services/menu.service';//og location
//I chose the 'separate file' solution
import { MenuItem } from './menu-item.iface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item = <MenuItem>null;
  //Issue 2034, warnings when using type declarariont of an interface not declared in own file
  

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }
  
}
