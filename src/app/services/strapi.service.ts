import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeInterface } from '../pages/homepage/home.interface';
import { AboutInterface } from '../pages/about-me/about-me.interface';
import {
  ServiceCategoryInterface,
  ServiceInterface,
} from '../pages/services/services.interface';
import { environment } from '../../environments/environment.develop';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getHome(): Observable<{ data: HomeInterface }> {
    const populateQuery = [
      'populate[hero][populate][0]=background',
      'populate[hero][populate][1]=cta',
      'populate[about_preview][populate][0]=image',
      'populate[featured_service][populate][0]=cta',
      'populate[featured_service][populate][1]=featured_services',
      'populate[featured_service][populate][2]=featured_services.cover_image',
      'populate[featured_service][populate][3]=featured_services.icon',
      'populate[featured_service][populate][4]=featured_services.category',
      'populate[reviews_section][populate][0]=avatar',
      'populate[seo][populate][0]=ogImage',
    ].join('&');

    return this.http.get<{ data: HomeInterface }>(
      `${this.baseUrl}/home?${populateQuery}`
    );
  }

  getAbout(): Observable<{ data: AboutInterface }> {
    const populateQuery = [
      'populate[bio_text_image][populate][image]=true',
      'populate[specializations][populate][icon]=true',
      'populate[values][populate][icon]=true',
      'populate[gallery][populate][image]=true',
      'populate[seo][populate][ogImage]=true',
    ].join('&');
    return this.http.get<{ data: AboutInterface }>(
      `${this.baseUrl}/about?${populateQuery}`
    );
  }

  getServicesCategory(): Observable<{ data: any }> {
    const populateQuery = ['populate=image'].join('&');
    return this.http.get<{ data: any }>(
      `${this.baseUrl}/service-categories?${populateQuery}`
    );
  }

  getCategoryBySlug(slug: string) {
    return this.http.get<{ data: any }>(
      `${this.baseUrl}/service-categories?filters[slug][$eq]=${slug}&populate[services][populate]=*`
    );
  }

  getServiceBySlug(slug: string) {
    return this.http.get<{ data: any }>(
      `${this.baseUrl}/services?filters[slug][$eq]=${slug}&populate=*`
    );
  }
}
