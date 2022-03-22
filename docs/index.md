---
title: Home
nav_order: 1
---

# Example

```ts
import { SystemClock } from 'clock-ts'
import * as C from 'fp-ts/Console'
import * as IO from 'fp-ts/IO'
import { pipe } from 'fp-ts/function'

pipe(
  SystemClock,
  IO.chainFirst(() => C.info('The date is')),
  IO.chain(C.info),
)()
/*
The date is
2022-03-22T11:04:31.640Z
*/
```
