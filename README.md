# Frontend Demo Project

This project is a frontend application built using Vite, React and Typescript. Its purpose is to demonstrate coding skills and best practices for frontend development.

## Assumtions
+ Code will grow. It can add many developers and be split in different services
+ Services require low amount of requests
+ It should be used by people with visual impairments
+ Website has its own design system, so no templating library or framework was used

## Features

### Technologies

* Vite
* React
* Typescript
* Stiled Components
* Jest

### Contents

  + Home: with an introduction
  + Coins: with search
  + Coin Details: with basic information

### Folder structure

Domain-driven folder structure with separated files for components, styles, types, services, states, and tests

### Styling

Styled-components used for styling with general constants, shared styles and particular ones for each component

### Accesibility

WCAG & ARIA compliance tested with react-axe

### Performance

* Performance tested with Google Lighthouse
* Lazy loading of contents for code splitting
* List search is memoized and debounced to reduce the requests to the server
* Coin details are stored on localstore to reduce requests to the server

### Error management

Error handling components and ErrorBoundary component

### Documentation

Some JSDoc included


## Improvements
There are several improvements that can be made to this project:

* Implement a mocking layer for APIs
* Add more integration, end-to-end, and visual tests
* Design and implement a custom graphic design, including favicon
* Implement PWA features
* Add documentation for branching, building, design guidelines, etc.


## To Run
1. Clone the repo to your local machine
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open the browser and navigate to `http://localhost:5432` to view the app

# Conclusion
This project is a solid demonstration of frontend development skills and best practices. With further improvements
and enhancements, it can become an even more robust and impressive application.