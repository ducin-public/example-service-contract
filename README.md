# Contract-first

_Contract-first design_ approach aims to make RESTful API development smooth, transparent and predictable.
GIven a business task, developers of both backend and frontend systems (including mobile apps) discuss
the features. No code is written at this step. They discuss what resources need to be available, what is
their content, parameters, potential headers, content-types and all corner-cases, etc. Then the API design
is written down (HTTP: urls, methods, content, content-type, statuses, headers, etc along with JSON Schema)
developers of different parts can split and implement their part, according to the contract.

# RAML

RESTful API Modelling Language - YAML-based DSL for declaring REST API shape, semantics, content, etc.
Tooling around RAML lets you automate many repetitive and time-consuming tasks, such as mock generation,
BE integration tests, docs generation and so on.

More info on RAML can be found at [the docs](http://raml.org/raml-10-spec) and [this tutorial](http://raml.org/developers/raml-200-tutorial).

# Mock REST API

Based on [`json-server` npm package](https://github.com/typicode/json-server) and [`json-schema-faker` npm package](https://http://json-schema-faker.js.org).

# Usage

## `npm run contract-docs`

Generates API contract as HTML/CSS files, output placed under `docs/` directory. Use npm:`http-server` or any other WWW server.

## `npm run contract-typedef`

Uses `raml-to-typescript` and `json-schema-to-typescript` to generate TypeScript definitions out of JSON Schema definitions.

## `npm run mock-generate`

Reads JSON Schema files and generates mock database file, basing on it.

## `npm run mock-api`

Uses `json-server` to run the mocked API (in-memory, `SIGINT` makes changes persistent in db file).
