import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [ 
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }
