# Introduction

Build a basic [Vue](https://vuejs.org/v2/guide/) project without
using Webpack. Here's a [tutorial on developerlife.com](
https://developerlife.com/2018/08/15/introduction-to-vue/)
that provides a detailed explanation of the code in this repo.

# Single origin policy

To enhance security, ES6 modules are subject to
[same-origin policy](http://tinyurl.com/jwag3hy)
which means we have to run a local server in order to being able to run
JavaScript applications using this technology. Unfortunately, that means we
have to install a npm dependency `browsersync`. There's more
[info on stackoverflow](https://stackoverflow.com/a/46992592/2085356)
on this CORS (cross origin resource sharing) policy.

# Structure of the project

This is the folder and file structure of the project.

```text
+-- package.json
+-- src
    +-- TodoComponents.js
    +-- index.html
    +-- main.js
    +-- styles.css
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

-   `npm install`
-   `npm start`
