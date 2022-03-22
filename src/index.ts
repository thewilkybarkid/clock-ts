/**
 * @since 0.1.0
 */
import * as D from 'fp-ts/Date'
import * as I from 'fp-ts/IO'

import IO = I.IO

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */
export type Clock = IO<Date>

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 0.1.0
 */
export const SystemClock: Clock = D.create

/**
 * @example
 * import * as C from 'clock-ts'
 *
 * const date = new Date('2001-02-03')
 * const clock = C.FixedClock(date)
 * assert.deepStrictEqual(clock(), date)
 *
 * @category constructors
 * @since 0.1.0
 */
export function FixedClock(date: Date): Clock {
  return I.of(date)
}
