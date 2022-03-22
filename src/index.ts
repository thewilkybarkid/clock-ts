/**
 * @since 0.1.0
 */
import * as RIO from 'fp-ts-contrib/ReaderIO'
import * as D from 'fp-ts/Date'
import * as I from 'fp-ts/IO'

import IO = I.IO
import ReaderIO = RIO.ReaderIO

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */
export type Clock = IO<Date>

/**
 * @category model
 * @since 0.1.0
 */
export interface ClockEnv {
  clock: Clock
}

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

// -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @example
 * import * as C from 'clock-ts'
 * import { pipe } from 'fp-ts/function'
 *
 * const date = new Date('2001-02-03')
 * const env = { clock: C.FixedClock(date) }
 * assert.deepStrictEqual(pipe(env, C.now)(), date)
 *
 * @category utils
 * @since 0.1.0
 */
export const now: ReaderIO<ClockEnv, Date> = ({ clock }) => clock
