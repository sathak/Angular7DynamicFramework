import { Component, OnInit, Input,ChangeDetectionStrategy  } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form-component.html',
  styleUrls: ['./dynamic-form-component.scss'],
})

export class DynamicFormComponent implements OnInit {
  
  @Input() dynamicForm: {};
  @Input() action: string;
  public dynamicGroup:FormGroup;
  private formSubmitAttempt: boolean;
 
  constructor(private fb: FormBuilder) {
    // To initialize FormGroup  
    this.dynamicGroup=new FormGroup({
          });
  
  }


  ngOnInit() {
    console.log(this.action);
  }
  // Executed When Form Is Submitted  
  onFormSubmit(form: any) {
    this.formSubmitAttempt = true;
    if (form.valid) {
      console.log(form.value);
    } else {
      // validate all form fields
      this.validateAllFormFields(form);
    }
    
  }
  validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
      control.updateValueAndValidity();
      
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    }
  });
}
reset(form: any) {
  form.reset();
  this.formSubmitAttempt = false;
}
}
