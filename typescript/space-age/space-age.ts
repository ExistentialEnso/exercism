const ORBITAL_PERIODS: any = {
  mercury: .2408467,
  venus: .61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

const SECONDS_PER_YEAR = 31557600

export function age(planet: string, seconds: number): number {
  if(!ORBITAL_PERIODS[planet.toLowerCase()]) {
    throw new Error("Invalid planet name!")
  }

  return parseFloat((seconds / SECONDS_PER_YEAR / ORBITAL_PERIODS[planet.toLowerCase()]).toFixed(2))
}
