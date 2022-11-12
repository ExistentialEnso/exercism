export class Triangle {
  sides: number[] = []

  constructor(...sides: number[]) {
    this.sides = sides
  }

  get isValidTriangle(): boolean {
    return this.sides[0] != 0 &&
      this.sides[1] != 0 &&
      this.sides[2] != 0 &&
      this.sides[0] + this.sides[1] > this.sides[2] && 
      this.sides[1] + this.sides[2] > this.sides[0] &&
      this.sides[2] + this.sides[0] > this.sides[1]
  }

  get isEquilateral(): boolean {
    return this.isValidTriangle && (this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2])
  }

  get isIsosceles(): boolean {
    return this.isValidTriangle && (this.sides[0] == this.sides[1] || this.sides[1] == this.sides[2] || this.sides[2] == this.sides[0])
  }

  get isScalene(): boolean {
    return this.isValidTriangle && (!this.isEquilateral && !this.isIsosceles)
  }
}