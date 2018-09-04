import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';
import { Router } from '@angular/router';
import { EditArticle } from '../../models/editArticle';

@Component({
    selector: 'app-edit-article',
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

    angForm: FormGroup;
    public title: AbstractControl;
    public description: AbstractControl;
    public id;
    constructor(private articleservice: ArticleService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
        this.angForm= this.fb.group({
            'title': [''],
            'description' : ['']
        });
        this.title = this.angForm.controls['title'];
        this.description = this.angForm.controls['description'];
    }

    ngOnInit() {
        // subscribe to router event
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.donesi1();
        });
    }

    donesi1() {
        this.articleservice.getOneArticle(this.id).toPromise().then(response => {
           this.title.setValue(response.name);
           this.description.setValue(response.description)
        });
    }

    editArticle() {
        this.articleservice.editArticle(this.id, this.title.value, this.description.value).toPromise().then(response=>{
            this.router.navigateByUrl('articles');
        });
    }
}

