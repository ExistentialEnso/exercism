export class Clock {
  totalMinutes: number = 0

  constructor(hour: number, minute?: number) {
    this.totalMinutes = hour * 60 + (minute || 0)

    this._normalize()
  }

  private _normalize(): void {
    // If we're in the negative, keep adding days until we aren't
    while(this.totalMinutes < 0) {
      this.totalMinutes += 60 * 24
    }
  }

  public toString(): string {
    const hour = Math.floor(this.totalMinutes / 60) % 24
    const minutesAfterHour = this.totalMinutes % 60

    // Unit tests looking for 24 hour time, so no need to worry about AM/PM
    return `${hour.toString().padStart(2, '0')}:${minutesAfterHour.toString().padStart(2, '0')}`
  }

  public plus(minutes: number): Clock {
    this.totalMinutes += minutes

    this._normalize()

    return this
  }

  public minus(minutes: number): Clock {
    this.totalMinutes -= minutes

    this._normalize()

    return this
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }
}
