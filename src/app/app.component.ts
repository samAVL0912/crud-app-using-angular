import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
// form field
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
// input
import { MatInputModule } from '@angular/material/input';
// DOB
import { MatDatepickerModule } from '@angular/material/datepicker';
// will not the below one from web just import
import { MatNativeDateModule } from '@angular/material/core';
// radio button
import { MatRadioModule } from '@angular/material/radio';
// select from drop down
import { MatSelectModule } from '@angular/material/select';
// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// dialog ewf apne app hua
import { DialogRef } from '@angular/cdk/dialog';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule, HttpClientModule],
  // after adding httpCl       gp to service file 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'crud_app';

  // start adding txt
  constructor(private _dialog: MatDialog) { }   // injected variable
  openAddEditEmp() {
    this._dialog.open(EmpAddEditComponent)     // mention the component that you want to open inside the  dialog box 
  }
} 
