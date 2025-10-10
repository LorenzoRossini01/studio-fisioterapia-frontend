import { Component } from '@angular/core';
import { Button } from '../../components/shared/button/button';
import { MyServices } from '../../components/shared/my-services/my-services';
import { OpeningTimes } from '../../components/shared/opening-times/opening-times';
import { ServiceCard } from '../../components/shared/service-card/service-card';
import { CustomerReview } from '../../components/shared/customer-review/customer-review';
import { PageTitle } from '../../components/shared/page-title/page-title';
import { MoreInfo } from '../../components/shared/more-info/more-info';
import { BlogArticlePreview } from '../../components/shared/blog-article-preview/blog-article-preview';

@Component({
  selector: 'app-blog',
  imports: [
    Button,
    MyServices,
    OpeningTimes,
    CustomerReview,
    PageTitle,
    MoreInfo,
    BlogArticlePreview,
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  handleButtonClick() {
    console.log('clicked');
  }
}
