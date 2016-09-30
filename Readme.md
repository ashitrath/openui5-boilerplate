# OpenUI5 Boilerplate

1. Clone the repository

  ```
  git clone https://github.com/ashitrath/openui5-boilerplate.git
  cd openui5-boilerplate
  ```

2. Setup

  ```
  npm install --global gulp-cli http-server
  npm install
  ```

3. Run the gulp to merge multiple files into one preload file, and run a local server

  ```
  gulp ui5preload
  http-server -o
  ```
