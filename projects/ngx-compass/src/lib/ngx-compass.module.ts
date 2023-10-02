import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxCompassComponent} from './ngx-compass.component';
@NgModule({
  declarations: [
    NgxCompassComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxCompassComponent,
  ]
})
export class NgxCompassModule {}
