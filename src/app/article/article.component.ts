import {Component, HostBinding, Input} from "@angular/core";
import {ArticleModel} from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent {
  @HostBinding("class.row") cssClass = "row";
  @Input() articleCh: ArticleModel | undefined;
  // this input decorator ensures that the article property is populated by the article object passed in from the front-page component.

  // votes: number | undefined;
  // @Input() link: string | undefined;
  // @Input() title: string | undefined;


  // voteUp() {
  //   // this.votes = (this.votes || 0) + 1; ; basically means if this.votes is undefined, then set it to 0. otherwise, set it to this.votes + 1.
  //   this.votes = (this.votes || 0) + 1;
  //   return false;
  // }
  //
  // voteDown() {
  //   if (this.votes === 0) {
  //     return false;
  //   }
  //   this.votes = (this.votes || 0) - 1;
  //   return false;
  // }


  // constructor() {
  //   this.articleCh = new ArticleModel("Angular 2", "http://angular.io", 10);
  // }


  // we add this function here as well beacaue we want to be able to call it from the template.
  voteUp(): boolean {
    if (this.articleCh) {
      this.articleCh.voteUp();
    }
    return false;
  }

  voteDown(): boolean {
    if (this.articleCh) {
      this.articleCh.voteDown();
    }
    return false;
  }


}
