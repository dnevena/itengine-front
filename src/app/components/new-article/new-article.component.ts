import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, AbstractControl } from '@angular/forms';
import {ArticleService} from '../../service/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  public articlesModel: Article = {
    title: '',
    description: '',
  };

  title = 'Add Article';
  angForm: FormGroup;
  constructor(private articleservice: ArticleService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  addArticle() {
      this.articleservice.addArticle(this.articlesModel.title, this.articlesModel.description).toPromise().then(() => {

        this.router.navigateByUrl('articles');
      });
      
  }
  ngOnInit() {
    // const id = this.route.params
  }

}

