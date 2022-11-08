/**
 * Determines whether the provided year is a leap year.
 * 
 * @param year The year to check
 * @returns Whether it is a leap year
 */
export function isLeap(year: number): boolean {
  return year%4==0 && (year%100!=0 || year%400==0)
}
