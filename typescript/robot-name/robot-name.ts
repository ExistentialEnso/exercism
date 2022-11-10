const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let namesSoFar: string[] = []

export class Robot {
  robotName: string = ""

  constructor() {
    this.robotName = this.generateName()
  }

  private generateName(): string {
    let newName = ""

    while(newName == "" || namesSoFar.indexOf(newName) > -1) {
      newName += LETTERS[Math.floor(Math.random()*LETTERS.length)]
      newName += LETTERS[Math.floor(Math.random()*LETTERS.length)]
      newName += Math.floor(Math.random()*10)
      newName += Math.floor(Math.random()*10)
      newName += Math.floor(Math.random()*10)
    }

    namesSoFar.push(newName)

    return newName
  }

  public get name(): string {
    return this.robotName
  }

  public resetName(): void {
    this.robotName = this.generateName()
  }

  public static releaseNames(): void {
    namesSoFar = []
  }
}
