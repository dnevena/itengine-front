import { Article } from './article';
import { ArticlesComponent } from './../components/articles/articles.component';

export class CreateArticle {
    constructor() {}

    public title: string;
    public description: string;

    setArticleValue(articles: ArticlesComponent) {
        this.title = articles.ArticlesModel.title;
        this.description = articles.ArticlesModel.description;
    }
}