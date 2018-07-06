export default class Track
{
  constructor(private title: string, private lengthInSeconds: number) {}

  public getTitle(): string {
    return this.title
  }

  public getLengthInSeconds(): number {
    return this.lengthInSeconds
  }

  public getLengthAsTimestamp(): string {
    return `${this.getMinutesFromSeconds()}:${this.getSecondsLeftoverFromMinutes()}`
  }

  private getMinutesFromSeconds(): string {
    return Math.floor(this.lengthInSeconds / 60).toString()
  }

  private getSecondsLeftoverFromMinutes(): string {
    return Math.floor(this.lengthInSeconds % 60).toString().padStart(2, '0')
  }
}