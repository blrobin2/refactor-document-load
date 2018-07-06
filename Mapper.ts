import Assortment from "./Assortment";
import Track from "./Track";
import Album from "./Album";

export default class Mapper
{
  static jsonToAssortment(json: string): Assortment {
    const parsed = JSON.parse(json)
    const albums = parsed.albums.map((a: any) => {
      const tracks = a.tracks.map((t: any) =>
        new Track(t.title, t.lengthInSeconds))
      return new Album(a.artist, a.title, tracks)
    })
    return new Assortment(albums)
  }
}