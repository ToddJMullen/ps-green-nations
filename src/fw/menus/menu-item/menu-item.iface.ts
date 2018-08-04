
export interface MenuItem{
	text: string
	,icon: string//will be glyphicon name
	,route: string
	,subMenu: Array<MenuItem>
}
