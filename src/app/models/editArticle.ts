import { Login } from './login';
import { LoginComponent } from './../components/login/login.component';

export class EditArticle {
    constructor(public title: string,
        public description: string,
        public id: string
    ) { }
}

