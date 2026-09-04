# My Contacts API

REST API for managing contacts and categories, built to study backend architecture, PostgreSQL integration and separation of concerns with Node.js.

## Features

- list contacts
- retrieve a contact by ID
- create contacts
- update contacts
- delete contacts
- list categories
- create categories
- update categories
- delete categories

## API routes

### Contacts

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/contacts` | List contacts |
| GET | `/contacts/:id` | Get one contact |
| POST | `/contacts` | Create a contact |
| PUT | `/contacts/:id` | Update a contact |
| DELETE | `/contacts/:id` | Delete a contact |

### Categories

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/categories` | List categories |
| POST | `/categories` | Create a category |
| PUT | `/categories/:id` | Update a category |
| DELETE | `/categories/:id` | Delete a category |

## Architecture

The project is organized around a simple separation between HTTP concerns and data access.

```text
Request
  ↓
Routes
  ↓
Controllers
  ↓
Repositories
  ↓
PostgreSQL
```

This keeps query logic out of the controllers and makes the responsibilities of each layer easier to understand.

## Tech stack

Node.js · Express · PostgreSQL · pg

Development tooling:

ESLint · Nodemon · Yarn

## Running locally

Install dependencies:

```bash
yarn
```

Create a PostgreSQL container:

```bash
docker run --name mycontacts-postgres \
  -e POSTGRES_USER=root \
  -e POSTGRES_PASSWORD=root \
  -e POSTGRES_DB=mycontacts \
  -p 5432:5432 \
  -d postgres
```

The current project expects the following local database configuration:

```text
host: localhost
port: 5432
user: root
password: root
database: mycontacts
```

Start the API:

```bash
yarn dev
```

The server runs at:

```text
http://localhost:3000
```

## What I focused on

This project was built as a backend learning exercise focused on:

- REST API design
- controllers and repositories
- SQL and PostgreSQL
- parameterized queries
- validation
- error handling
- separation of concerns

## Current limitations

The repository still reflects its learning-project origins.

Some configuration is hardcoded for local development, and the project does not yet include automated tests or production-oriented environment configuration.

Those limitations are intentionally documented rather than hidden.

## Status

**Learning project / completed core scope.**
