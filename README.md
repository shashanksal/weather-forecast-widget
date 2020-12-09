## Weather Forecast Toolkit

#### WeatherForecaster

React based web application that leverages [MetaWeather APIs](https://www.metaweather.com/api/) to display weather for next 4 days at the searched location.

## Project Status

This project is a personal project and currently in development. Users can see weather forecast for next 4 days at the current stage. UI enhancements, Unit tests and other imporvements are ongoing.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

To Generate Code Coverage:

`npm run test:coverage`

## Folder Structure

After creation, your project should look like this:

```
appName/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
    robots.txt
  src/
    __tests__/
      ......
      ......
    assets/
      ......
      ......
    components/
      App/
        .....
      Header/
        .....
      .....
      .....
    controller/
      ......
      ......
    store/
      ......
      ......
    utils/
      ......
      ......
    App.css
    index.css
    index.tsx
    setupTests.ts
    global.d.ts
  .editorconfig
  jest.config.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.tsx` is the TypeScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.

## Tech Stack used

- React
- Redux
- Typescript
- Material-UI for components
- Jest

## Reflection

This was a sample project I decided to undertake as an assignment. I started this process by using the `create-react-app` boilerplate, then adding `redux` and `@material-ui/core`.

One of the main challenges I ran into was Testing using Jest, Typescript, Redux all together. This lead me to spend a day more on a researching how to integrate all together. Due to project time constraints and other work comitments, I had to compromise on UI design, validations and Geolocation API.

At the end of the day, the technologies implemented in this project are React, Typescript, Redux, Material-UI, and a significant amount of JavaScript/ Typescript, TSX, and styles. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on integrating Geolocation API to be able to auto load location in the search box. Additionally, I plan to implement multi city search (Search and select one city in a list of similarly named cities, e.g. Newcastle, NSW, AU and Newcastle upon Tyne, UK)
