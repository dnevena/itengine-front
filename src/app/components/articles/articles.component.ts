import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../service/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../service/article.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    public items = [];
    public ArticlesModel: Article = {
        title: '',
        description: ''
    };

    constructor(private articleservice: ArticleService, private authenticationService: AuthenticationService,
        private _activatedRoute: ActivatedRoute, private _router: Router) { }

    onBackButtonClick(): void {
        this._router.navigate(['/new']);
    }

    ngOnInit() {
        this.donesi();
    }
    donesi() {
        this.authenticationService.getArticles().toPromise().then(response => {
            this.items = response;
        });
    }

    editArticle(id) {
        this._router.navigate(['/edit-articles/', id]);
    }

    removeArticle(id) {
        this.articleservice.deleteAricle(id).toPromise().then(() => {
            this.donesi();
        });
    }
}

