
export interface ArtisBaseInfo {
  id: string;
  name: string;
  profileUrl: string
}


export interface SongBase {
  key: string;
  mainArtist: ArtisBaseInfo,
  artwork: string;
  mediaUrl: string;
  songName: string;
  songDuration: number;
  url: string;
  listenTimes: string;
  subArtist: ArtisBaseInfo[]
}
