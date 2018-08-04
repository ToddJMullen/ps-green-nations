import { Injectable } from "@angular/core";

import { MenuItem } from "../interfaces/menu-item.iface";




@Injectable()
export class MenuService{

	items: Array<MenuItem>;

	constructor(){}

}