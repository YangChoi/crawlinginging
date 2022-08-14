export interface MelonResponse {
  constsLike: MelonValues[];
}

export interface MelonValues {
  CONSTID: number;
  LIKEYN: 'Y' | 'N';
  SUMMCTN: number;
}
