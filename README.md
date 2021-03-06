<br />
<p align="center">
  <a href="https://github.com/jvwasquevite/jwt-nodejs-api">
    <img src="https://jvwasquevite.com/github/logo.png" alt="Logo">
  </a>

  <h3 align="center">JWT Node.js API</h3>

  <p align="center">
    Simple Node.js API with authentication
    <br />
    <a href="https://jvwasquevite.notion.site/NLW06-mission-nodeJS-51a92b212f6d4c958cab2fcf1edbc9f9"><strong>Explore documentation »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jvwasquevite/jwt-nodejs-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/jvwasquevite/jwt-nodejs-api/issues">Request Feature</a>
    ·
    <a href="https://github.com/jvwasquevite?tab=repositories">More Projects</a>
  </p>
</p>

<!-- made at screely.com, with: shadow on, plain regular window, no background, and 80x100px padding -->
<p align="center">
<img src="https://raw.githubusercontent.com/rocketseat-education/nlw-06-nodejs/master/.github/preview.png" alt="JWT Node.js API">
</p>

## About The Project

This project was developed with [Node.js](https://nodejs.org/en/), using [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io/#/) and [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme).

### Built With

* [Express](https://expressjs.com/pt-br/)
* [TypeScript](https://www.typescriptlang.org/)
* [TypeORM](https://typeorm.io/#/)
* [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

### Main Features

* Routers authentication with JSON WebToken
* Project layered architectured

### More Information

This project was developed during Next Level Week 06 by [@rocketseat-education](https://github.com/rocketseat-education/). [Additional features](#additional-features) has been made by me.

### Directory Structure

```
src
├── @types/express           # Custom express types to get authenticated user_id
├── controllers              # Implements requests and responses from routes.ts
├── database
│   └── migrations           # Create new tables on database without using SQL
│   └── database.sqlite
├── entities                 # Represents a table on database
├── middleware               # Middlewares to authentication
├── repositories             # Connects entity layer with services layer
├── services                 # Use cases, rules implementations
└── routes.ts
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/en/) runtime builder
* [Yarn](https://classic.yarnpkg.com/en/) package manager

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/jvwasquevite/jwt-nodejs-api.git
   ```
2. Install packages with Yarn:
   ```sh
   yarn install
   ```
  
### Useful commands

1. To run:
   ```sh
   yarn dev
   ```
2. To create database tables:
   ```sh
   yarn typeorm migration:run
   ```

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License.

<h2 id="additional-features">Additional features</h2>

* Created additional routes to delete and updated an user
* Created additional routes to forgot password, with [single use JWT token](https://www.jbspeakr.cc/howto-single-use-jwt/) sended on email
* Created additional [user cases](https://github.com/jvwasquevite/jwt-nodejs-api/blob/master/user-cases.md)
* Implemented dotenv to hide sensible variables


## Acknowledgements

* How to authenticate routes using middlewares and JSONWebToken
* How to make a layered architecture besides simple MVC pattern
* How to create [use case diagrams](https://en.wikipedia.org/wiki/Use_case_diagram) to structure projects 
* How to use Oriented Object Programming principles on Node.js APIs

## Future implementations

- [ ] Deploy project on Heroku, AWS or Digital Ocean
- [ ] Achitecture refactoring using use cases with [package by feature](https://phauer.com/2020/package-by-feature/) structure
- [ ] Create custom classes for error handling
- [ ] Create email notifications for compliments
- [ ] Implement automatic testing

## Get in touch with me

Get more information about me at [jvwasquevite.com](https://jvwasquevite.com/) or email me at [joao@jvwasquevite.com](mailto:joao@jvwasquevite.com).
