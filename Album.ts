import Track from './Track'

export default class Album
{
  constructor(
    private artist: string,
    private title: string,
    private tracks: Track[]
  ) {}

  getArtist(): string {
    return this.artist
  }

  getTitle(): string {
    return this.title
  }

  getTracks(): ReadonlyArray<Track> {
    return this.tracks
  }

  getTrackNames(): ReadonlyArray<string> {
    return this.tracks.map((t: Track) => t.getTitle())
  }

  getTrackListing(): ReadonlyArray<string> {
    return Array.from(this.getTracks(),
        (t: Track) =>
          `${this.artist} - ${t.getTitle()} (${t.getLengthAsTimestamp()}) : "${this.title}"`
      );
  }

  getLengthInSeconds(): number {
    return this.tracks.reduce((acc: number, t: Track) =>
      acc + t.getLengthInSeconds()
      , 0)
  }
}
