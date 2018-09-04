import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }
    public loginModel: Login = {
        username: '',
        password: ''
    };

    ngOnInit() {
    }

    myfunction() {
        this.authenticationService.onLogin(this.loginModel).subscribe(
            result => {
                localStorage.setItem('token', 'Bearer ' + result.message);
                this.router.navigateByUrl('articles');
            }, error => {
                alert(error.error.message);
            });
    }
}

