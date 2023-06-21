import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})

export class BusyService {


  constructor(private spinner: NgxSpinnerService) { }

  showSpinner() {
    this.spinner.show(undefined, {
      type: 'timer',
      fullScreen: true,
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  hideSpinner() {
    this.spinner.hide();
  }


}
