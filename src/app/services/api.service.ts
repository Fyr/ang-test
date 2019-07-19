import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { TableItemModel } from '../models/table-item.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Class ApiService is responsible for communication between app and 3d-party API
 */
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Returns URL for watching video
   * @param videoId - youtube video ID
   * @return (string) - URL for watching video
   */
  static getVideoUrl(videoId: string) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

  /**
   * Returns API URL to get data depending upon request options
   * @param options - request options
   * @return (string) - URL to send request for API
   */
  static getApiUrl(options: any) {
    const defaultOptions = {
      key: environment.videoApi.key,
      maxResults: 50,
      type: "video",
      part: "snippet",
      q: ""
    };
    const queryOptions = Object.assign({}, defaultOptions, options);
    const queryParams = Object.keys(queryOptions).map(prop => {
      return `${prop}=${encodeURIComponent(queryOptions[prop])}`;
    }).join('&');
    return environment.videoApi.baseURL + '?' + queryParams;
  }

  /**
   * Performs search specified by keyword and returns Observable object
   * @param q - keyword to search
   * @return (mixed)- Observable
   */
  getVideoItems(q: string): Observable<TableItemModel[]> {
    return this.http.get(ApiService.getApiUrl({q})).pipe(
      map((response: any) => response.items.map(row => {
        return new TableItemModel(
          row.id.videoId,
          row.snippet.thumbnails.medium.url,
          row.snippet.publishedAt,
          row.snippet.title,
          row.snippet.description
        )
      }))
    );
  }
}
