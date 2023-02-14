import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './component/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
