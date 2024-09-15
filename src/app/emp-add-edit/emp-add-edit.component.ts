import { Component } from '@angular/core';
// form field 
import {MatFormFieldModule} from '@angular/material/form-field';
// input
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
// FOR DOB
import {MatDatepickerModule} from '@angular/material/datepicker';
// will not the below one from web just import
import { MatNativeDateModule } from '@angular/material/core';
// radio button
import {MatRadioModule} from '@angular/material/radio';
// select from drop down
import {MatSelectModule} from '@angular/material/select';
// Reactive Form
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
// Added automatically for dialog reference 
import { DialogRef } from '@angular/cdk/dialog';
// http client v added in import yaha apne aap aaya
import { HttpClientModule } from '@angular/common/http';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule,MatDatepickerModule,MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule,HttpClientModule,],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.css'
})

export class EmpAddEditComponent {
  // for dropw down menu of education
  edu: string[] = ["A","B","C"];

  // define form
  empform: FormGroup;
  // now initialize it 
  constructor(private  _fb: FormBuilder, private _empservice: EmployeeService, private  _dialogref: MatDialogRef<EmpAddEditComponent>){
      // we call the servie that we hhave created 
      // the 2nd parameter 
      // 3rd for dialog reference
      this.empform = this . _fb .group({
      // now create controls
        firstname:"", lastname:"",email:"",age:"",gender:"",dob:"",education:""});
  }

  // functiob that is called when form is submitted
  onFormSubmit(){
    if(this.empform.valid){
      //console.log(this.empform.value)

      // also open console to check whether form submitted sucessfully or not
      // first v did this 


      this. _empservice .addEmployee(this. empform .value).subscribe({
        next: (val : any) =>{
          // if sucess we enter here 
          alert("success");
          this. _dialogref.close();
        },
        error:(err: any) =>{
          // if error we enter here
          console.error(err);
        },
      });
    }
  }
}
