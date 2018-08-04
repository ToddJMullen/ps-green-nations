import { Injectable } from "@angular/core";

import { MenuItem } from "../menus/menu-item/menu-item.iface";




@Injectable()
export class MenuService{

	items: Array<MenuItem>;
	isVertical = false;
	showingLeftMenu = false;

	constructor(){}

	toggleLeftMenu(){
		this.isVertical = true;
		this.showingLeftMenu = !this.showingLeftMenu;
	}

}