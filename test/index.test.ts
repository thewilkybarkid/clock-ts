import * as fc from 'fast-check'
import * as _ from '../src'

describe('clock-ts', () => {
  describe('constructors', () => {
    test('FixedClock', () => {
      fc.assert(
        fc.property(fc.date(), date => {
          const clock = _.FixedClock(date)

          expect(clock()).toStrictEqual(date)
        }),
      )
    })

    test('SystemClock', () => {
      fc.assert(
        fc.property(fc.date(), date => {
          jest.useFakeTimers().setSystemTime(date)

          expect(_.SystemClock()).toStrictEqual(date)
        }),
      )
    })

    afterEach(() => {
      jest.useRealTimers()
    })
  })
})
