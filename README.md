# Project - REACT QUIZ
Projektgrupp: Linda Gustafsson, Sebastian Borg och Susan Isaksson 
Utbildning: Webbutveckling för e-handel/Medieinstitutet Göteborg år 2021 

Länk till GitHub http://github.com/sebrg/react-quiz

Vi har använt API: https://opendb.com
## Beskrivning 

Vi har skapat en Webb-App med hjälp av CreateReact-App och TypeScript vilket i stort går ut på att samla poäng genom att svara rätt på frågor.  

På startsidan har du tre valmöjligheter; PLAY, HIGHSCORE och RULES. 

RULES visar spelets regler och HIGHSCORE visar en lista över de högsta insamlade poängen (Namn och poäng). Väljer du PLAY i vår App får du först ange ett “spelarnamn” innan du kommer till nästa steg, då kommer du till spelplanen (GamePlan). På spelplanen (GamePlan) finns 10 ‘levels’ vilket motsvarar varsin kategori. På spelplanen visas även “spelarnamnet”, din totala poäng (score) och tillgängliga ‘levels’.  

När du väljer en ‘level’ presenteras i turordning 5 frågor och 4 svarsalternativ. Du markerar önskat svarsalternativ och är valt svarsalternativ rätt får du en poäng, men är svaret fel får du inget poäng. Därefter presenteras nästa fråga. När du svarat på de 5 frågorna kommer du tillbaka till spelplanen (GamePlan), eventuella poäng uppdateras, genomförd ‘level’ syns inte längre och du väljer nu nästa ‘level’. När du svarat på frågorna på alla ‘levels’ sparas dina totala poäng (score) och presenteras på highscore-listan i HIGHSCORE. Du kan nu välja att avsluta spelet eller fortsätta till “nästa” spelplan. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Clone down this repository. To install globally on you machine you need:

### 'npm istall'


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
