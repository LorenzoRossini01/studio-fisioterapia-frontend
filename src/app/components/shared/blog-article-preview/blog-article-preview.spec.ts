import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlePreview } from './blog-article-preview';

describe('BlogArticlePreview', () => {
  let component: BlogArticlePreview;
  let fixture: ComponentFixture<BlogArticlePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticlePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticlePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
