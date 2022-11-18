export class Series {
  series: string

  constructor(series: string) {
    if(series.length === 0) {
      throw new Error('series cannot be empty')
    }

    this.series = series
  }

  slices(sliceLength: number): number[][] {
    if(sliceLength < 0) {
      throw new Error('slice length cannot be negative')
    } else if(sliceLength === 0) {
      throw new Error('slice length cannot be zero')
    } else if(sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length')
    }

    const slices: number[][] = []

    for(let i=0; i+sliceLength<=this.series.length; i++) {
      slices[i] = this.series.slice(i, i+sliceLength).split("").map(x => parseInt(x))
    }

    return slices
  }
}
