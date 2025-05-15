import { Temporal } from '@js-temporal/polyfill';
const duration: DurationFormatInput = {
    hours: 1,
    minutes: 30
};

console.log('en, long', new Intl.DurationFormat('en', { style: 'long' }).format(duration));
console.log('en, short', new Intl.DurationFormat('en', { style: 'short' }).format(duration));
console.log('en, narrow', new Intl.DurationFormat('en', { style: 'narrow' }).format(duration));

console.log('fr, long', new Intl.DurationFormat('fr', { style: 'long' }).format(duration));

// Convert to and from Temporal.Duration (ISO 8601 format)
// Note: The Temporal API is not yet available in Node 24, so you have to use a polyfill
// Upvote: https://github.com/nodejs/node/issues/57127
const temporal = Temporal.Duration.from('PT1H30M');
console.log('Intl.DurationFormat from', temporal.toString(), ' => ', 
  new Intl.DurationFormat('en', { style: 'long' })
    .format(temporal));