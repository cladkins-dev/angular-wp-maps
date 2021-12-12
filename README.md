# Angular Wordpress Maps Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Google Maps API Key
To be able to use the code you will need to put in your API Key for Google Maps. 
./src/index.html

Find the line with "<API_KEY>" and then replace it with your API Key.
Prehaps in the future I will use a environment variable for this instead, 
however since the Google API key is already going to be visible in the browser it doesn't make a lot of sense.


## Docker Compose
See docker-compose.yaml for example config.

## Troubleshooting Steps / Lessons Learned
    npm i -g @angular/cli@12
    npm i -g @angular/material@12
    npm i -g @angular/cdk@12
    npm i @angular/google-maps@12.2.13
