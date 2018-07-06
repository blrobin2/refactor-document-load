import Album from './Album'

export default class Assortment {
  constructor(private albums: Album[]) {}

  public getAlbums(): ReadonlyArray<Album> {
    return this.albums
  }

  public getArtists(): ReadonlyArray<string> {
    return this.albums.map((a: Album) => a.getArtist()).sort()
  }

  public getLengthInSeconds(): number {
    return this.albums.reduce((acc: number, a: Album) =>
      acc + a.getLengthInSeconds()
      , 0)
  }

  public getTrackNames(): ReadonlyArray<string> {
    return this.albums.reduce((acc: string[], a: Album) =>
      acc.concat(a.getTrackNames())
      , []).sort()
  }

  public getTrackListings(): ReadonlyArray<string> {
    return this.albums.reduce((acc: string[], a: Album) =>
      acc.concat(a.getTrackListing())
      , [])
  }
}