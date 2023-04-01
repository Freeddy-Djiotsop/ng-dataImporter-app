import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-border" role="status"
        style="height: 200px; width: 200px; color: #009688;">
        <span class="visually-hidden w-50" >Loading...</span>
      </div>
    </div>
  `
})
export class LoaderComponent {
  
}
