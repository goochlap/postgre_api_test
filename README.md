# PostGres Test - API

> Backend API which allows to create Videos & Tags and to associate them

## Stack

- [node](https://nodejs.org/en/about/)
- [expressJS](https://expressjs.com/fr/)
- [sequelize](https://sequelize.org/)
- [postgreSQL](https://www.postgresql.org/)

## Install Dependencies

```
npm install

```

## Run App

```
# Run in dev mode
npm run dev

```

## Database CLI

[Sequelize-CLI-Documentation](https://github.com/sequelize/cli)

```
# Create DB
sequelize db:create

# Migrations
sequelize db:migrate

# Destroy all data
sequelize db:seed:undo:all

# Import all data
sequelize db:seed:all

```

## Testing

Run Tests with [Mocha](https://mochajs.org/)

```
npm run test

```
