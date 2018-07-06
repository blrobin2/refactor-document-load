import { readFileSync } from 'fs'
import Mapper from './Mapper';

const json = readFileSync('albums.json', 'utf-8')
const assortment = Mapper.jsonToAssortment(json)

console.log(assortment.getArtists())
console.log(assortment.getLengthInSeconds())
console.log(assortment.getTrackNames())
console.log(assortment.getTrackListings())