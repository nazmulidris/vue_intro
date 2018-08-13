# Introduction

Build a basic [Vue](https://vuejs.org/v2/guide/) project without
using Webpack. Here's a [tutorial](http://tinyurl.com/y7cr7jt6) 
that I got most of this from.

# Single origin policy

To enhance security, ES6 modules are subject to [same-origin policy](
https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) 
which means we have to run a local server in order to being able to 
run JavaScript applications using this technology. Unfortunately, 
that means we have to install a npm dependency `browsersync`. There's
more [info on stackoverflow](https://stackoverflow.com/a/46992592/2085356)
on this CORS (cross origin resource sharing) policy.

# Structure of the project

This is the folder and file structure of the project.

```text
├── package.json
└── src
    ├── components
    ├── index.html
    └── main.js
```

And here's the `package.json` script that's needed to launch the local web 
server that will serve up all the JS files from the same origin.

```json
{
  "scripts": {
    "start": "browser-sync start --server 'src' --files 'src' --single"
  }
}
```

# Run it

Type the following commands:
* ```npm install```
* ```npm start```