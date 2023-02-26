# Intranet theme
This theme is used as base theme for all intranets.

## Pre-requisites
This projects uses a specific version of Node.js. A .nvmrc file is included to
use the desired Node.js version. Install all required dependencies for
this theme:
```
nvm use
npm install
npm run build
```

## Commands
Within the theme, the following commands can be used (npm run [command]):
```
build       - Build the files.
watch       - Build and watch .scss and .js changes.
lint        - Run all linters.

js:build    - Build js files.
js:compile  - Compile es6 to es5.
js:minify   - Minify js files.
js:watch    - Watch all js changes.
js:lint     - Lint all js files.

css:build    - Build css files.
css:compile  - Compile sass to css.
css:prefix   - Auto prefix css.
css:minify   - Minify css files.
css:watch    - Watch all .scss changes.
css:lint     - Lint all sass files.
```

## Linting ES6 and SASS
Within the theme we work with SASS and ES6. The SASS code is compiled to CSS and
the ES6 code is compiled to JS. This means that only the SASS and ES6 files need
to be linted.

## Prettier
Prettier is used when linting ES6 and SASS, but you can use Prettier with your
own IDE. See more info at https://prettier.io/docs/en/editors.html.