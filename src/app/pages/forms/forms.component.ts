import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from 'src/app/enrollment.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  topics=['Angular','React','Vue']; 
  topicHasError = true;
  submitted = false;

  userModel= new User('', 'rob@test.com', 7488587192, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value:any){
    if(value ==='default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe({
      next:data => console.log('Success!', data),
     error:error => console.error('Error!',error)
      
    })
  }

}
