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