// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `c` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://sigfox-board.herokuapp.com:3000',
  apiVersion: 'api',
  primusUrl: 'https://sigfox-board.herokuapp.com:2333'
};
