import { Injectable } from "@angular/core";


export interface MenuItem{
	text: string
	,icon: string//will be glyphicon name
	,route: string
	,subMenu: Array<MenuItem>
}



@Injectable()
export class MenuService{

	items: Array<MenuItem>;

	constructor(){}

}