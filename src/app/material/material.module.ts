import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
const materialComponents=[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,
  MatTableModule]

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
