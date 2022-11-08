export class DnDCharacter {
  public hitpoints: number 
  public constitution: number 
  public strength: number 
  public dexterity: number 
  public intelligence: number 
  public wisdom: number
  public charisma: number

  public constructor() {
    this.constitution = DnDCharacter.generateAbilityScore()
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  private static roll6d(): number {
    return Math.floor(Math.random()*6)+1
  }

  public static generateAbilityScore(): number {
    let lowest = 7
    let total = 0
    
    for(let index = 0; index < 4; index++) {
      const roll = this.roll6d()

      if(index < 3) {
        total += roll
      } else if(index == 3 && roll > lowest) {
        total += roll - lowest // Effectively kicks the actual lowest out of our tally
      } else if(roll < lowest) {
        lowest = roll
      }
    }

    return total
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue-10)/2)
  }
}
