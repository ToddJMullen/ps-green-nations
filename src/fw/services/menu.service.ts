import { Injectable } from "@angular/core";

import { MenuItem } from "../menus/menu-item/menu-item.iface";




@Injectable()
export class MenuService{

	items: Array<MenuItem>;
	isVertical = true;

	constructor(){}

}