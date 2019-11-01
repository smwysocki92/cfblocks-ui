import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { RequestService } from 'src/app/service/request.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserSession } from 'src/app/model/userSession.model';
import { User } from 'src/app/model/user.model';
@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html'
})
export class UserProfileCardComponent implements OnInit, OnChanges {
  @Input() user: User;
  constructor(private ls: LoginService, private request: RequestService, private router: Router, private fb: FormBuilder) {}
  profile: FormGroup = new FormGroup({
    username: new FormControl({value: '', disabled: true}),
    email: new FormControl({value: '', disabled: true}),
    firstName: new FormControl(),
    lastName: new FormControl(),
    dob: new FormControl()
  });
  errorMessage = '';
  ngOnInit() {
    this.loadForm(this.user);
  }
  loadForm(user?: User) {
    // TODO
    this.profile = this.fb.group({
      username: [{value: user ? user.username : '', disabled: true}, Validators.email],
      email: [{value: user ? user.email : '', disabled: true}, Validators.email],
      firstName: [user ? user.firstName : '', Validators.required],
      lastName: [user ? user.lastName : '', Validators.required],
      dob: [user ? user.dob : '', Validators.required]
    });
  }
  onSubmit() {
    this.errorMessage = '';
    if (this.profile.valid) {
      this.request.post('/user/update', this.buildUser(this.profile)).subscribe((user: User) => {

      }, error => {
        console.error(error);
        this.errorMessage = error.message;
      });
    } else {
      this.errorMessage = 'Please fix errors and try again.';
    }
  }
  get username() { return this.profile.get('username'); }
  get email() { return this.profile.get('email'); }
  get firstName() { return this.profile.get('firstName'); }
  get lastName() { return this.profile.get('lastName'); }
  get dob() { return this.profile.get('dob'); }
  buildUser(user: FormGroup) {
    return new User({
      username: user.value.username,
      email: user.value.email,
      firstName: user.value.firstName,
      lastName: user.value.lastName,
      dob: user.value.dob
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && changes.user.currentValue !== changes.user.previousValue) {
      this.loadForm(changes.user.currentValue);
    }
  }
}
