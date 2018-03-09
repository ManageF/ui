:toc: macro
:toc-title:

toc::[]

= UI
image:https://travis-ci.org/ManageF/ui.svg?branch=master[Travis Status, link=https://travis-ci.org/ManageF/ui] image:https:/coveralls.io/repos/github/ManageF/ui/badge.svg?branch=master[Coverage Status, link=https://coveralls.io/github/ManageF/ui?branch=master]

== Introduction

A Ui interface for ManageF

== Technologies
* React.js
* TBD


== Quick Start
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


== Developing

When developing, is usual to run this application outside with the container API.

Is possible to proxy the API requests without having to push the changes to ui.

Add proxy to package.json

[source, json]
----
{
  "name": "swsui",
  "version": "0.2.1",
  "proxy": "http://api-manage-f.127.0.0.1.nip.io",
  "bugs": {
...
----

== Building

See the guides in https://github.com/ManageF/guides