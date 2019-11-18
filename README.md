# Nutmeg Frontend Coding Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Run

```
npm install
```

Then run:

```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### How to CalculateTotalFees

You are a brand new customer of Nutmeg and you open up a new Investment Pot. When you open up the pot, you contribute a starting amount of £500 for the first month. You have set up a monthly contribution of £250 for month 2 and onwards.

Every month you contribute £250, and for each month you contribute (minus the first month) we will apply a fee charge of 0.0625% on the total value of the pot. This charge happens 'after' the monthly contribution is made.

Calculate the total fees over 36 months and display the result as seen in the design provided under `requirements/Design.png`
