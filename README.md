# API testing in Cypress - Workshop module
Repository for API testing in Cypress, an additional module to the [Cypress core workshop](https://filiphric.com/cypress-core-workshop)

## Author
I am Filip. I am lead SDET in the company called [Slido](https://www.sli.do/) and a [Cypress ambassador](https://cypress.io/ambassadors/)

## What’s in this repo
This repo contains all the materials for the workshop. Most of the chapters start with `demo_start.js` and finish with `demo_end.js` file. You can find code challenges in the `challenge.js` file and solutions in the `challenge_solution.js` file.

## Trello clone app
Bundled as a submodule is an app that is a clone of a popular [Trello app](https://trello.com). You can create boards, lists and cards. You can drag and drop cards between tests or even upload a picture to the card detail. There’s also a very simple signup and login which will allow you to create private boards

### Installation
Super simple
1. `npm install`
2. `npm start`
3. Open your browser on `http://localhost:3000`

### Database
The application uses a json file for a database which you can find in `trelloapp/backend/data/database.json`. Uploaded files are in `trelloapp/backend/data/uploaded` folder.

### Application utilities
By typing `F2` key in the application, a small toolset appears that will allow you to reset your application to a desired state. You can delete boards, lists, cards, users or everything. This is useful when playing with the application manually.


# API documentation
API docs can be found in [docs folder](./docs/)