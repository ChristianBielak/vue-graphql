import Odd from './Odd'
import Draws from './Draws'

export default class Draw {
  date!: string
  numbers!: Array<number>
  jackpot!: number
  additionalNumbers!: Array<number>
  odds!: Array<Odd>
  draws!: Array<Draw>

  public static getDraw(draws: Draws): Draw {
    return draws.draws[0]
  }
}
