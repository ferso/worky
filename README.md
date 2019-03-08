#Worky Challenge

## Instrucciónes

La aplicación está contruida en 3 partes de acuerdo a los requerimientos del challenge.

- Worky-scripts
  Contiene el código para hacer traer los datos de https://naruto.fandom.com/wiki/Category:Characters

- Worky-api
  Continen la aplicación rest hecha en nodejs para conectar los datos con el front end

- Worky-frontend
  Aplicación realizada en Vue.js que presenta los datos mediante la api


La aplicación se conecta a MongoDb utilizandio la configuraxión default de Mongo (localhost, 27017)

  ### Worky-scripts
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

  * Si se requiere configurar una base de datos de mongo con una configuración diferente, lo debes hacer en el archivo worky-scripts/main.py

  ```
  database = {
      'port':27017,
      'uri':'localhost',
      'name':'test_worky',
  }    

  Naruto = NarutoChars()
  Naruto.setDb(database) <----- Aquí

```

  ### Worky-api
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

    * Si se requiere configurar una base de datos de mongo con una configuración diferente, lo debes hacer en worky-api/config/datastores.js

    ```
    default: {
      adapter: 'sails-mongo',
      url: 'mongodb://127.0.0.1:27017/worky',  <---- Aquí
    },

  ```


  - Para ejecutar los tests

    ```
    sudo npm install mocha -g
    ------------------------------------

    mocha tests/lifecycle.test.js tests/integration/**/*.test.js
    ------------------------------------

    ```

### Worky-frontend
  ------------
