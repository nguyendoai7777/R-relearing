
export interface ArtisBaseInfo {
  id: string;
  name: string;
  profileUrl: string
}


export interface SongBase {
  index: number;
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

export type SongItemProps = Omit<SongBase, 'artwork' | 'index'> & {
  onClick?: () => void
}