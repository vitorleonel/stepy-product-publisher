# Stepy - Product Publisher

**Stepy Product Publisher** is a fake application that represents the flow of publishing a product in our ecommerce that is also fake.

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

I decided to follow the structure of a component like we do here in the current company, so all components you will see the following structure below:

```
ComponentName.tsx
ComponentName.spec.tsx
index.ts
interfaces.tsx
```

## What would I keep doing or would I add

From what is already in this repository, I would continue or add the following things:

- I would continue to do the unit tests and improve them;
- I would add E2E tests to ensure flow;
- I would add a state management to be able to keep the data when I return a stream;
- ...among other things that a real project would require
