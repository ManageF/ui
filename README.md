# UI

[![Travis Status](https://travis-ci.org/ManageF/ui.svg?branch=master)](https://travis-ci.org/ManageF/ui) [![Coverage Status](https://coveralls.io/repos/github/ManageF/ui/badge.svg?branch=master)](https://coveralls.io/github/ManageF/ui?branch=master)

# Introduction

A Ui interface for ManageF

# Guides
Read the [guides](https://github.com/managef/guides) of the project.

## Technologies
* React.js
* TBD


## Quick Start
[source,shell]
----
npm install
npm start
----

A new browser window should automatically open.
But, if it doesn't then use:
`http://localhost:3000`

This launches a development environment that instantly
reloads any changes to the browser for rapid development.


## Developing

When developing, is usual to run this application outside with the container API.

Is possible to proxy the API requests without having to push the changes to ui.

Add proxy to package.json

```json
{
  "name": "swsui",
  "version": "0.2.1",
  "proxy": "http://api-manage-f.127.0.0.1.nip.io",
  "bugs": {
...
```

## Building

See the guides in https://github.com/ManageF/guides
