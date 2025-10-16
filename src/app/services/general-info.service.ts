import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { MediaInterface } from '../pages/homepage/home.interface';
import { environment } from '../../environments/environment.develop';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class GeneralInfoService {
  generalInfo = signal<GeneralSiteInfo | null>(null);

  constructor(private http: HttpClient) {}

  loadGeneralInfo() {
    return this.http
      .get<{ data: GeneralSiteInfo }>(`${API_URL}/general-site-info?populate=*`)
      .subscribe((info) => this.generalInfo.set(info.data));
  }
}

export interface GeneralSiteInfo {
  site_name: string;
  site_logo?: MediaInterface;
  email?: string;
  phone_number?: string;
  address?: string;
  google_maps_embed?: string;
  opening_hours?: { day: string; hours: string }[];
  social_links?: { platform: string; url: string; icon?: string }[];
}
