# Gigaleet SCSS/Autoprefixer Kit
Gigaleet SCSS/Autoprefixer Kit is a simple workflow using SCSS Autoprefixer, and Source Map

##Install
- Make sure you have npm installed; download from https://nodejs.org/en/
- Make sure you have gulp installed; run `$ npm install --global gulp`
- Clone Repo; run `$ git clone https://github.com/Gigaleet/gigaleet-scssautoprefixer-kit.git`
- Install Package; run `$ npm install` in the gigaleet-scssautoprefixer-kit directory

##Usage

### Watch For Changes & Compile

```sh
$ gulp
```

This complies the scss files, generates sourcemaps for easier debugging, and prefixes CSS with Autoprefixer.


### Serves Compiled and Compress Files for Production

```sh
$ gulp prod
```

This outputs compressed file for production.
