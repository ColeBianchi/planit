# Planit

Full stack service to plan dates for events without the need for account sign-up.

## Starting Backend Server to handle database interactions

Requirements:
* node.js 18.2.0+
* typescript 4.7.2+

Run `cd planit-backend` to enter the backend server directory
Run `tsc index.ts` to build the app
Run `PRIVKEY={path to privatekey.pem} FULLCHAIN={path to fullchain.pem} node .`

## Starting angular test server to debug app

Requirements:
* node.js 18.2.0+
* typescript 4.7.2+
* Angular CLI 13.3.6+

Run `npm start`