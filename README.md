# Stepy - Product Publisher

**Stepy Product Publisher** is a fake application that represents the flow of publishing a product in our ecommerce that is also fake. If you want, you can see it working by [clicking here](https://stepy-product-publisher.netlify.app/).

![image](https://user-images.githubusercontent.com/15618005/126352805-f9d309c4-f5d0-44a1-95ad-c4cd0655b86e.png)

## How to install

To install you need the latest stable version of Node.js (I used 14x), `yarn` and run the following commands below:

```sh
$ git clone https://github.com/vitorleonel/stepy-product-publisher

$ cd stepy-product-publisher

$ yarn install
```

### How to start

To start the application, run the following commands below within the project path:

```sh
$ yarn start
```

### How to run the tests

To start the application, run the following commands below within the project path:

```sh
$ yarn test
```

## About component structure

I decided to follow the structure of a component as we do here in the current company, so all components you will see a structure similar to the one below:

```
ComponentName.js
index.js
```

## What would I keep doing or would I add

From what is already in this repository, I would continue or add the following things:

- I would add the unit tests using Jest with React Testing library;
- I would add E2E tests to ensure flow using Cypress;
- I would continue to adjust the lint's and prettier config;
- ...among other things that a real project would require
