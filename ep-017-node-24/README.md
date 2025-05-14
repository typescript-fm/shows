# Episode 17B - Node 24 Deep Dive

To run the examples:

```sh
nvm use # or use fnm to install Node v24
node ./<snippet>.ts
```

This is using Node 24's native TypeScript handling.

## Node Typings

Notably, as of this repo commit, the Node 24 typings are not yet available but there is a WIP PR: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/72589

As such, you'll notice some of the APIs will throw TS errors but that's fine as it'll still work.

## Examples

_Summarized with Copilot_

* **atomics.ts** - Demonstrates the new TC39 proposal for micro waits in JavaScript using `Atomics.pause()`. Shows how to implement a spin-wait pattern with exponential backoff between the main thread and worker threads using shared memory.
* **using.ts** - Shows the new ECMAScript `using` declaration for resource management, which automatically calls `[Symbol.dispose]()` at the end of the block.
* **url-pattern.ts** - Demonstrates the URLPattern API for pattern matching URLs with named groups and extracting parameters from URLs.
* **regexp-modifiers.ts** - Shows the new RegExp in-pattern modifiers capability, allowing different parts of a regular expression to have different flags.
* **regexp-escape.ts** - Demonstrates the new `RegExp.escape()` static method for safely escaping special characters in regular expressions.
* **regexp-dupes.ts** - Shows handling of duplicate named capture groups in regular expressions.
* **promise-try.ts** - Illustrates the new `Promise.try()` method for handling synchronous code that might throw in a Promise chain.
* **intl-durationformat.ts** - Demonstrates the new `Intl.DurationFormat` API for formatting time durations in a locale-aware way.
* **float16.ts** - Shows the new `Float16Array` typed array for working with half-precision floating-point numbers.
* **error.ts** - Demonstrates the new `Error.isError()` method for reliably checking if a value is an Error object.

