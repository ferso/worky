#Worky Challenge

## Instrucciónes

La aplicación está contruida en 3 partes de acuerdo a los requerimientos del challenge.

- Worky-scripts
  Contiene el código para hacer traer los datos de https://naruto.fandom.com/wiki/Category:Characters

- Worky-api
  Continen la aplicación rest hecha en nodejs para conectar los datos con el front end

- Worky-frontend
  Aplicación realizada en Vue.js que presenta los datos mediante la api


  ## Worky-scripts
  ------------  
  - Requiere Python 3
  - Para arrancar el script es necesario desde la terminal ejecutar
  ```

  cd worky-scripts
  ------------------------------------

  pip install -r requirements.txt
  ------------------------------------

  python main.py
  ------------------------------------
  ```
  - Para ejecutar los tests

  ```
  pytest
  ------------------------------------

  ```

  ## Worky-api
  ------------
  - Requiere última versión de nodejs
  - Para arrancar la aplicación hacer lo siguiente:
  ```
  cd worky-api
  ------------------------------------

  yarn install
  ------------------------------------

  yarn start
  ------------------------------------

  ```
  - El api responde en https://localhost:1337
  - Para ejecutar los tests
  ```
  sudo npm install mocha -g
  ------------------------------------

  mocha tests/lifecycle.test.js tests/integration/**/*.test.js
  ------------------------------------

  ```

  ## Worky-frontend
  ------------
  
