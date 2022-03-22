---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [FixedClock](#fixedclock)
  - [SystemClock](#systemclock)
- [model](#model)
  - [Clock (type alias)](#clock-type-alias)
  - [ClockEnv (interface)](#clockenv-interface)
- [utils](#utils)
  - [now](#now)

---

# constructors

## FixedClock

**Signature**

```ts
export declare function FixedClock(date: Date): Clock
```

**Example**

```ts
import * as C from 'clock-ts'

const date = new Date('2001-02-03')
const clock = C.FixedClock(date)
assert.deepStrictEqual(clock(), date)
```

Added in v0.1.0

## SystemClock

**Signature**

```ts
export declare const SystemClock: Clock
```

Added in v0.1.0

# model

## Clock (type alias)

**Signature**

```ts
export type Clock = IO<Date>
```

Added in v0.1.0

## ClockEnv (interface)

**Signature**

```ts
export interface ClockEnv {
  clock: Clock
}
```

Added in v0.1.0

# utils

## now

**Signature**

```ts
export declare const now: RIO.ReaderIO<ClockEnv, Date>
```

**Example**

```ts
import * as C from 'clock-ts'
import { pipe } from 'fp-ts/function'

const date = new Date('2001-02-03')
const env = { clock: C.FixedClock(date) }
assert.deepStrictEqual(pipe(env, C.now)(), date)
```

Added in v0.1.0
