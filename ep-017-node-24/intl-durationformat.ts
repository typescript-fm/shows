const df = new Intl.DurationFormat('en', { style: 'long' });
console.log(df.format({ hours: 1, minutes: 30 })); // "1 hour and 30 minutes"
