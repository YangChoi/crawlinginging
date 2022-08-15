export interface VibeResponse {
  response: {
    result: {
      track: [];
    };
  };
}

export interface TrackInformation {
  trackTitle: string;
  artists: Artist[];
  album: Album;
}

export interface Artist {
  artistName: string;
  isGroup: boolean;
}

export interface Album {
  albumTitle: string;
  releaseDate: string;
  albumGenres: string;
  productionName: string;
  sizeAndDuration: string;
}

export interface MusicDetail {
  titleTrack: string;
  artistName: string;
  albumTitle: string;
  releaseDate: string;
  albumGenres: string;
  productionName: string;
}
