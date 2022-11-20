export class Triangle {
    size: number

    constructor(size: number) {
        this.size = size
    }

    public get rows(): number[][] {
        let output: number[][] = []

        for(let i = 0; i<this.size; i++) {
            if(i === 0) {
                output.push([1])
                continue
            }

            let lastRow = output[i-1]
            let thisRow: number[] = []

            for(let j = 0; j <= lastRow.length; j++) {
                if(j === 0 || j == lastRow.length) {
                    thisRow[j] = 1
                    continue
                }

                thisRow[j] = lastRow[j-1] + lastRow[j]
            }

            output.push(thisRow)
        }

        return output
    }

    public get lastRow(): number[] {
        const rows = this.rows

        return rows[rows.length-1]
    }
}
