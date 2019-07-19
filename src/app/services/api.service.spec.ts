import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

import { TableItemModel } from '../models/table-item.model';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data', () => {

    const q = 'john';
    const videoId = '3fumBcKC6RE';
    const imageUrl = 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg';
    const publishedAt = '2011-05-12T20:01:31.000Z';
    const title = 'Lil Wayne - John (Explicit) ft. Rick Ross';
    const description = 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.';

    service.getVideoItems(q)
      .subscribe((items: TableItemModel[]) => {
        expect(items.length).toBe(1);

        const item: TableItemModel = items[0];

        expect(item.id).toBe(videoId);
        expect(item.imageUrl).toBe(imageUrl);
        expect(item.publishedAt).toBe(publishedAt);
        expect(item.title).toBe(title);
        expect(item.description).toBe(description);
      });

    const req = httpTestingController.expectOne(ApiService.getApiUrl({q}));

    req.flush({
      kind: 'youtube#searchListResponse',
      etag: '\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/9lS4H-4jUAdPShKdvIKiKp875K0\"',
      nextPageToken: 'CDIQAA',
      regionCode: 'BY',
      pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 50
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: '\"Bdx4f4ps3xCOOo1WZ91nTLkRZ_c/QtJ4MlYKdN_zTBjfY3xY6mn7ZRg\"',
          id: {
            kind: 'youtube#video',
            videoId
          },
          snippet: {
            publishedAt,
            channelId: 'UCEOhcOACopL42xyOBIv1ekg',
            title,
            description,
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: imageUrl,
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'LilWayneVEVO',
            liveBroadcastContent: 'none'
          }
        }]
    });
  });
});
