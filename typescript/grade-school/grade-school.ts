export class GradeSchool {
  private grades: any = {}

  roster(): any {
    // Prevent modification of data from outside the class
    return JSON.parse(JSON.stringify(this.grades))
  }

  add(name: string, grade: number): void {
    if(!name || !grade)
      return

    // The provided unit tests don't want duplicate names, which is silly for 
    // real world use cases of something like this, but okay...
    for(let i in this.grades) {
      if(this.grades[i].indexOf(name) !== -1) {
        this.grades[i].splice(this.grades[i].indexOf(name), 1)
      }
    }

    if(!this.grades[grade])
      this.grades[grade] = []

    this.grades[grade].push(name)
    this.grades[grade].sort()
  }

  grade(grade: number): string[] {
    // .splice() makes a new array object to prevent data modification
    return (this.grades[grade] || []).slice()
  }
}
