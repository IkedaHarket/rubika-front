import { Injectable } from '@angular/core';
import { AlertOptions } from '../interfaces';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  displayToast({...args}: AlertOptions){
    Swal.fire({
      ...args,
      toast: true,
      position: 'top-end',
      timer: 2000,
      showConfirmButton: false,
    })
  }

}
