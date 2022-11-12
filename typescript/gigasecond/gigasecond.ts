export class Gigasecond {
  inputDate: Date

  public constructor(inputDate: Date) {
    this.inputDate = inputDate
  }

  public date() {
    return new Date(this.inputDate.getTime() + 1000000000000) // 10 ^ 9 seconds or 10 ^ 12 milliseconds
  }
}
