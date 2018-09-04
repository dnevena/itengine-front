import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Register } from '../../models/register';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    public email: AbstractControl;

    constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
        this.form = this.fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
            'password': ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
            'email': ['', Validators.compose([Validators.required, Validators.maxLength(15)])]
        });
        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];
        this.email = this.form.controls['email'];
    }

    ngOnInit() {
    }

    register() {
        const registerModel = new Register(this.username.value, this.password.value, this.email.value);
        this.authService.signUp(registerModel).subscribe(response => {
            this.router.navigateByUrl('login');
            // console.log(response);
            // if (response.status >= 200 && response.status < 300) {
            //     this.router.navigateByUrl('login');
            // } else {
            //     alert(response.error);
            // }
        });
    }
}


