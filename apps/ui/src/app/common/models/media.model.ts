import { ArtisBaseInfo } from '@models/artist.model';


export interface SongBase {
  id: string;
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
