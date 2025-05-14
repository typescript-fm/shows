// TypeScript declarations for Node.js 24 APIs
// Created by Copilot
//
// DO NOT USE, CHECK OFFICIAL PR: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/72589
//

// RegExp enhancements
interface RegExpConstructor {
  /**
   * Escapes all RegExp special characters in a string.
   * @param str The string to escape RegExp special characters in.
   */
  escape(str: string): string;
}

// // Promise enhancements
// interface PromiseConstructor {
//   /**
//    * Creates a Promise that is resolved with the result of a function's execution.
//    * If the function throws an error, the Promise is rejected with that error.
//    * @param fn The function to execute.
//    */
//   try<T>(fn: () => T | PromiseLike<T>): Promise<T>;
// }

// Atomics enhancements
interface Atomics {
  /**
   * Indicates to the JavaScript engine that the current thread is spinning in a loop
   * and could benefit from yielding execution to other threads.
   * @param duration The number of milliseconds to pause; if 0, it's a hint to the engine.
   */
  pause(duration?: number): void;
}

// Error enhancements
interface ErrorConstructor {
  /**
   * Determines whether the provided value is an Error object.
   * @param value The value to be checked.
   */
  isError(value: any): value is Error;
}

// URLPattern
declare class URLPattern {
  /**
   * Creates a new URLPattern object from the given pattern.
   * @param pattern The pattern to match URLs against.
   */
  constructor(pattern: string | URLPatternInit, baseURL?: string);
  
  /**
   * Tests if the given input matches this URL pattern.
   * @param input The URL string or components to test.
   */
  test(input: string | URLPatternInput, baseURL?: string): boolean;
  
  /**
   * Executes the pattern against the given input and returns the match result.
   * @param input The URL string or components to match.
   */
  exec(input: string | URLPatternInput, baseURL?: string): URLPatternResult | null;
}

interface URLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

interface URLPatternInput {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

interface URLPatternResult {
  inputs: [string] | [string, string];
  protocol: URLPatternComponentResult;
  username: URLPatternComponentResult;
  password: URLPatternComponentResult;
  hostname: URLPatternComponentResult;
  port: URLPatternComponentResult;
  pathname: URLPatternComponentResult;
  search: URLPatternComponentResult;
  hash: URLPatternComponentResult;
}

interface URLPatternComponentResult {
  input: string;
  groups: Record<string, string>;
}

// Intl enhancements
declare namespace Intl {
  class DurationFormat {
    /**
     * Creates a new DurationFormat object.
     * @param locales A string with a BCP 47 language tag, or an array of such strings.
     * @param options An object with configuration options.
     */
    constructor(locales?: string | string[], options?: DurationFormatOptions);
    
    /**
     * Formats a duration according to the locale and options of this DurationFormat object.
     * @param duration The duration to format.
     */
    format(duration: DurationFormatInput): string;
    
    /**
     * Returns an array of objects representing the formatted duration.
     * @param duration The duration to format.
     */
    formatToParts(duration: DurationFormatInput): DurationFormatPart[];
  }
}

interface DurationFormatOptions {
  style?: 'long' | 'short' | 'narrow' | 'digital';
  years?: 'long' | 'short' | 'narrow';
  months?: 'long' | 'short' | 'narrow';
  weeks?: 'long' | 'short' | 'narrow';
  days?: 'long' | 'short' | 'narrow';
  hours?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
  minutes?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
  seconds?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
  milliseconds?: 'long' | 'short' | 'narrow' | 'numeric';
  microseconds?: 'long' | 'short' | 'narrow' | 'numeric';
  nanoseconds?: 'long' | 'short' | 'narrow' | 'numeric';
  fractionalDigits?: number;
}

interface DurationFormatInput {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  microseconds?: number;
  nanoseconds?: number;
}

interface DurationFormatPart {
  type: string;
  value: string;
}

// Symbol.dispose
interface SymbolConstructor {
  /**
   * A Symbol that is used to identify the method that is executed at the end of a using block.
   */
  readonly dispose: unique symbol;
}

interface Disposable {
  [Symbol.dispose](): void;
}
