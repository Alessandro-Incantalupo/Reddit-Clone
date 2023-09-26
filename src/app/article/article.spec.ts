import { ArticleModel } from './article.model';

describe('Article', () => {
  it('should create an instance', () => {
    expect(new ArticleModel()).toBeTruthy();
  });
});
