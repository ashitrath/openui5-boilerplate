# OpenUI5 Boilerplate

1. Clone the repository

  ```
  git clone https://github.com/ashitrath/openui5-boilerplate.git
  cd openui5-boilerplate
  ```

2. Setup

  ```
  npm install --save-dev gulp-ui5-preload
  npm install --save-dev gulp-uglify
  npm install --save-dev gulp-pretty-data
  npm install --save-devgulp-if
  ```

3. Run the gulp to merge multiple files into one preload file, and run a local server

  ```
  gulp ui5preload
  http-server -o
  ```