This repository is theme for Vitaclean US store. Developed using Shopify/Slate.

## System Requirements

1. Operating system: Most stable on MacOS because of shortage of Slate. For detailed information check [here](https://shopify.github.io/slate/docs/system-requirements#operating-system).

2. Node

3. Yarn or npm 5+

## Environment

Slate has environment setting feature itself and you can set parameters for each environment in .env files. (ex: .env.production)

We have three environments:

- **dev**: environment for local development
- **staging**: environment for staging theme in store
- **production**: environment for production theme in store

You don't need to take care for 2 and 3. 

Environment for staging and production is already set in CI/CD.

## How to run

1. Yarn install

2. Yarn start

## Git workflow

We are using [Git-Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

- **develop:** branch for staging.
- **master:** branch for production.

## Auto Deployment System

We are using [codeship](https://codeship.com).

- When PR is merged in `develop` branch, it deploys to staging theme.

- When PR is merged in `master` branch, it deploys to production theme.
