import {Component} from "@angular/core";
import {ArticleModel} from "../article/article.model";


@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.scss"]
})
export class FrontPageComponent {

  articles: ArticleModel[] | undefined;

  constructor() {
    this.articles = [
      new ArticleModel("Ginutile", "https://www.treccani.it/vocabolario/obeso/", 1000),
      // new ArticleModel("Fullstack", "http://fullstack.io", 2),
      // new ArticleModel("Angular Homepage", "http://angular.io", 1),
    ];
  }

  // title: HTmlInputElement is a type annotation that tells TypeScript to only allow title to be an HTMLInputElement. and not just any type.
  // HtmlInputElement is a type that is built into TypeScript. specifically for input elements.
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {

    // console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles?.push(new ArticleModel(title.value, link.value, 0));
    title.value = "";
    link.value = "";

    return false;
  }

  sortedArticles(): ArticleModel[] {
    if (this.articles === undefined) {
      return [];
    }
    return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
  }
}
