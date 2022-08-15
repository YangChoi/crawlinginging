import { got } from 'got-scraping';
import { Injectable } from '@nestjs/common';
import { VibeResponse } from './dto';

/**
 * crawling melon chart
 */
const URL = 'https://apis.naver.com/vibeWeb/musicapiweb/track/56398441';
@Injectable()
export class CrawlingService {
  public async fetchData(): Promise<any> {
    const response = await got.get(URL).json<VibeResponse>();
    return response.response.result.track;
  }

  public async getTrackInformation(): Promise<void> {
    const trackInformation = await this.fetchData();

    const musicDetail = {
      trackTitle: trackInformation.trackTitle,
      artistName: trackInformation.artists[0].artistName,
      albumTitle: trackInformation.album.albumTitle,
      releaseDate: trackInformation.album.releaseDate,
      albumGenres: trackInformation.album.albumGenres,
      productionName: trackInformation.album.productionName,
    };
    console.log(musicDetail);
  }
}
