# ShuffleEats
ShuffleEats is a progressive web app that randomly chooses you next meal.

Find it [here](https://shuffleeats.com).

## Building
To start the local development server with hot-reload:
```bash
npm run serve
```

### Deploying to Hosting
First, make sure you sign into Firebase using `firebase login`.
Now, build the production version of the app.
```bash
npm run build
```

Then deploy the files to Firebase Hosting:
```bash
npm run deploy
```