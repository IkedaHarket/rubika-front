import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurtainService {

  private _isCurtainOpen = new BehaviorSubject<boolean>(false);
  public isCurtainOpen$ = this._isCurtainOpen.asObservable();

  constructor() { }

  toggleCurtain(){
    this._isCurtainOpen.next(!this._isCurtainOpen.value);
  }

}
