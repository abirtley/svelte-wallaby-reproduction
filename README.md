# svelte-wallaby-reproduction

This is essentially the default svelte-kit example app, 
but using Jest instead of Playwright for testing, 
so as to (ideally) facilitate testing with WallabyJS.

## Steps to reproduce:

### Verify that Jest works on its own:

1. Open a terminal in the project folder
2. Run `nvm use` to use node version 14
3. Run `yarn install`
4. Run `yarn test`
5. Observe 2/2 tests are passing

### Observe different behaviour in VSCode with WallabyJS

1. Open project folder in VS Code
2. Select WallabyJS configuration file (use wallaby.js from project root)
3. Open tests/index.test.ts
4. Start WallabyJS
5. Observe errors
