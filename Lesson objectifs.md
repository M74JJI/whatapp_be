# Custom logger, handle Server and http errors

Adding a custom logger, Handling uncaughtException, unhandledRejection errors, SIGTERM, and handle http errors.

## Objectifs

- Adding a custom logger to use instead of using the boring console.log to help us read the console better and seperate errors from infos.

- Handle Server closing when facing uncaughtException, unhandledRejection errors.

- Close server gracefully on SIGTERM signal.

- Handle http errors and get proper error messages from server.

## Packages we will use

**Winston:** <br/>[![Winston](https://img.shields.io/npm/v/winston.svg?logo=winston)](https://www.npmjs.com/package/winston)
<br/>
**Http-errors:** <br/>[![Http-errors](https://img.shields.io/npm/v/http-errors.svg?logo=http-errors)](https://www.npmjs.com/package/http-errors)

## Course created by

- [@med_hajji7](https://www.instagram.com/med_hajji7)
