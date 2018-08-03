import { Injectable } from '@angular/core';


export interface IconFiles{
  imageFile : string
  ,link     : string
  ,alt      : string
}

export interface FrameworkConfigSettings{
  showStatusBarBreakpoint? : boolean
  ,showLanguageSelector?   : boolean
  ,showUserControls?       : boolean
  ,showStatusBar?          : boolean
  ,socialIcons?            : Array<IconFiles>
}

@Injectable()
export class FrameworkConfigService {

  showStatusBarBreakpoint = 0;
  showLanguageSelector    = true;
  showUserControls        = true;
  showStatusBar           = true;
  socialIcons             = new Array<IconFiles>();

  configure( settings: FrameworkConfigSettings ):void{
    Object.assign( this, settings );
  }


  constructor() { }

}
