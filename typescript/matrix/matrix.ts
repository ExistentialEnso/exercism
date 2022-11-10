export class Matrix {
  rowData: number[][] = []
  colData: number[][] = []

  constructor(input: string) {
    let lines = input.split("\n")
    
    for(let i=0; i<lines.length; i++) {
      const line = lines[i]
      const row: number[] = []
      let items = line.split(" ")

      for(let j=0; j<items.length; j++) {
        const value = parseInt(items[j])

        row.push(value)

        if(!this.colData[j]) {
          this.colData[j] = []
        }
        this.colData[j].push(value)
      }

      this.rowData.push(row)
    }
  }

  get rows(): number[][] {
    return this.rowData
  }

  get columns(): number[][] {
    return this.colData
  }
}
