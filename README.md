# Carbon React Admin

## Base Camp Application

This is an example application built using IBM Carbon Design System in React, with an underlying React-Admin component that powers form logic.

## Development

There is an express server and client component, bundled into a single Docker file for easy deployment.

```sh
npm run install:all
```

```sh
npm run develop:all
```
## Building a Local Docker Image
```sh
docker build -t carbon-react-admin .
```
### Testing the Local Docker Image
```sh
docker run carbon-react-admin -p 7001:7001
```
Then open http://localhost:7001 to preview the application.
