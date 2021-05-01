# parsify-2.0
Data visualization application for artists to see how Spotify analyzes their music

![Alt Text](https://media.giphy.com/media/0tBUumQiX8A9UhSqol/giphy.gif)

## Frameworks
Parsify uses a MERN stack:
- MongoDB Community v4.4.1 w/ Mongoose v5.10.10
- Express v4.17.1
- React 17 w/ Hooks
- Node v14.9.0

## Running App
To start application after initial install:
1. Run `yarn serve` to start proxy server
2. Run `yarn start` to start client

## Generator/Seed Script
A generator script has been provided for you to populate mongo with a playlist's worth of song data.
1. Create a Spotify Developer's account and an application to get your own client and secret key
2. Create a config file with the following format:
`module.exports = {
  ID: 'YOUR CLIENT ID',
  SECRET: 'YOUR SECRET KEY'
}`
3. Then you're all set!  Run `yarn gen` to generate your inital song data.
4. Finally `yarn seed` to seed mongodb with your new data.
