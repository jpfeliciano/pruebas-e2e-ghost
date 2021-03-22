# Introducción

Este repositorio contiene los artefactos construídos (scripts, funcionalidades y evidencias) para la consecución de los objetivos definidos en la estrategia de pruebas sobre las versiones 3.3.0 y 3.41.1 de la interfaz de usuario de administración de [Ghost](https://github.com/TryGhost/Ghost).

Este repositorio ha sido construído por:

| Nombre | Correo Electrónico |
| ------------- | ------------- |
| Héctor Arias | h.arias@uniandes.edu.co |
| Juan Pablo Feliciano | jp.feliciano10@uniandes.edu.co |

## Contenido

- [Pruebas exploratorias manuales](#pruebas-exploratorias-manuales)
- [Pruebas exploratorias automatizadas](#pruebas-exploratorias-automatizadas)
- [Pruebas E2E con Kraken](#pruebas-e2e-con-kraken)
- [Pruebas E2E con Cypress](#pruebas-e2e-con-cypress)
- [Pruebas de regresión visual](#pruebas-de-regresión-visual)
- [Pruebas E2E con generación de datos](#pruebas-e2e-con-generación-de-datos)
- [Ventajas y desventajas de las herramientas utilizadas para las pruebas de reconocimiento](#ventajas-y-desventajas-de-las-herramientas-utilizadas-para-las-pruebas-de-reconocimiento)
- [Ventajas y desventajas de las herramientas utilizadas para las pruebas E2E](#ventajas-y-desventajas-de-las-herramientas-utilizadas-para-las-pruebas-e2e)
- [Ventajas y desventajas de las herramientas utilizadas para las pruebas regresión visual](#ventajas-y-desventajas-de-las-herramientas-utilizadas-para-las-pruebas-regresión-visual)

## Pruebas exploratorias manuales

Para adquirir un conocimiento base sobre la aplicación bajo pruebas (ABP) GHOST, durante la primera iteración se ejecutaron pruebas manuales exploratorias. El detalle de las funcionalidades probadas, los tipos de prueba y un enlace a un video que evidencia la ejecución de cada prueba, se encuentran detallados en el siguiente documento:

[Pruebas Exploratorias](https://github.com/jpfeliciano/pruebas-e2e-ghost/blob/main/pruebas-exploratorias-manuales/inventario-pruebas-exploratorias.xlsx)

## Pruebas E2E con Kraken

Los 28 escenarios seleccionados para las pruebas con Kraken pertenecen a 16 funcionalidades de Ghost descritas a continuación:

|Nº| Funcionalidad | Escenario | Tipo de Escenario |
|-| ------------- | ------------- | ------------- |
|1| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password correctos. | Positivo |
|2| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password incorrectos. | Negativo |
|3| Crear Post | Creación de un Post en Ghost. | Positivo |
|4| Editar Post | Edición de un Post en Ghost. | Positivo |
|5| Editar Post | Edición de un Post en Ghost. | Negativo |
|6| Crear Página | Creación de una página en Ghost | Positivo |
|7| Editar Perfil de Usuario | Edición de los datos del perfil de un usuario en Ghost | Positivo |
|8| Crear Tag | Creación de un Tag en Ghost | Positivo |
|9| Editar Tag | Edición de los datos de un Tag en Ghost | Positivo |
|10| Cerrar Sesión | Cerrar una sesión activa en Ghost | Positivo |
|11| Crear Página | Crear una pagina en el sitio, con una fecha de publicación anterior a la actual. | Positivo |
|12| Crear Página | Crear una pagina en el sitio, con una fecha de publicación posterior a la actual. | Positivo |
|13| Crear Página | Crear una pagina en el sitio, con titulo que tenga más de 255 caracteres. | Negativo |
|14| Ordenar publicaciones | Ordenar el listado de las publicaciones/posts de acuerdo con las opciones disponibles. | Positivo |
|15| Filtrar publicaciones | Ver únicamente las publicaciones con estado publicado/público. | Positivo |
|16| Gestionar Staff | Realizar una invitación a las personas a contribuir en el sitio. | Positivo |
|17| Gestionar Staff | Realizar una invitación a las personas a contribuir en el sitio (Sin Ingresar Campos Obligatorios). | Negativo |
|18| Configuraciones Generales | Editar información del titulo y descripción del sitio. | Positivo |
|19| Eliminar Post | Eliminación de un Post/Publicación | Positivo |
|20| Ordenar publicaciones | Validar que al momento de ingresar a la vista, el proceso de ordenamiento se cargue por defecto: el más nuevo. | Positivo |
|21| Crear Vista | Crear vista personalizada de acuerdo a la visualización que se tenga en le momento de su creación. | Positivo |
|22| Crear Vista | Crear vista con un nombre largo, el sistema debe informar la cantidad de caracteres permitidos. | Positivo |
|23| Editar Vista | Permitir editar la vista, con una nueva visualización de la informaión. | Negativo |
|24| Listar Tags | Consultar el listado de tags creados en el sitio. | Negativo |
|25| Editar Vista | Editar el nombre de la vista, con 1 caracter valido. | Positivo |
|26| Eliminar Vista | Ingresar a una vista personalizada y eliminarla. | Positivo |
|27| Listar Posts | Consultar el listado de Posts/Publicaciones cread(o)as. | Positivo |
|28| Filtrar Posts por valoración | Organizar la lista de Posts creados por valoración. | Positivo |


El código de los escenarios de prueba implementados con kraken se encuentra en el directorio [ghost-kraken-test](ghost-kraken-test).

### Instrucciones de ejecución

#### Prerequisitos

- Ruby + DevKit, en una versión igual o superior a la 2.20. (Puede aprender más sobre la instalación en este enlace: https://www.ruby-lang.org/es/documentation/installation/).
- JDK instalado en una versión de Java igual o superior a la 8.
- SDK de Android instalado. (Puede aprender más sobre la instalación en este enlace: https://developer.android.com/studio).
- El driver Chromedriver instalado en su máquina. (Puede obtener el driver desde este enlace: https://chromedriver.chromium.org/downloads).
- Instalar la versión 3.41.1 de Ghost en su máquina local siguiendo el tutorial del siguiente enlace [Tutorial - Ghost](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0).
- Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

#### Configuración de variables de entorno

- `JAVA_HOME` Debe tener como valor la ruta absoluta del directorio donde se encuentra el JDK.
- `ANDROID_HOME` Debe tener como valor la ruta absoluta del directorio donde se encuentra el Kit de desarrollo de Android.

#### Instalar Kraken-Mobile desde el código fuente

- En su terminal, ejecute el siguiente comando:

`gem install bundler`

- Ahora descargue el código fuente de Kraken-Mobile a su máquina local. Para esto, ubíquese en el directorio donde se alojará el subdirectorio con las pruebas (paso siguiente), como el subdirectorio para Kraken-Mobile. Clone los fuentes de Kraken desde el siguiente repositorio: [KrakenMobile](https://github.com/TheSoftwareDesignLab/KrakenMobile).

- En el mismo directorio (padre) que contiene el código fuente de Kraken, clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com:jpfeliciano/pruebas-e2e-ghost.git`

ó

`git clone https://github.com/jpfeliciano/pruebas-e2e-ghost.git`


- Ahora navegue hasta el subdirectorio `pruebas-e2e-ghost/ghost-kraken-test` con el siguiente comando:

`cd pruebas-e2e-ghost/ghost-kraken-test/`

- Finalmente instale ruby y kraken:

`bundle install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-kraken-test` y abra el archivo `properties.json` en el editor de texto de su preferencia. Establezca el valor de las variables `USERNAME` y `PASSWORD` con los valores que utilizó cuando creó la cuenta de usuario en Ghost.

#### Ejecución de las pruebas E2E con Kraken

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-kraken-test` y ejecute el siguiente comando para probar todos los escenarios:

`bundle exec kraken-mobile run --properties=./properties.json`

El comando anterior ejecuta todos los escenarios de prueba que se encuentran ubicados en el directorio `features`. Si se presentan errores durante la ejecución con el anterior comando, puede ejecutarlos de forma independiente tomando cómo referencia el siguiente (recomendado):

`bundle exec kraken-mobile run --feature="features/crear_tag_success.feature" --properties=./properties.json`

## Pruebas E2E con Cypress

Los 13 escenarios seleccionados para las pruebas con Cypress pertenecen a 10 funcionalidades de Ghost descritas a continuación:

|Nº| Funcionalidad | Escenario | Tipo de Escenario |
|-| ------------- | ------------- | ------------- |
|1| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password correctos. | Positivo |
|2| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password incorrectos. | Negativo |
|3| Crear Post | Creación de un Post en Ghost. | Positivo |
|4| Editar Post | Edición de un Post en Ghost. | Positivo |
|5| Editar Post | Edición de un Post en Ghost. | Negativo |
|6| Crear Página | Creación de una página en Ghost | Positivo |
|7| Editar Perfil de Usuario | Edición de los datos del perfil de un usuario en Ghost | Positivo |
|8| Crear Tag | Creación de un Tag en Ghost | Positivo |
|9| Editar Tag | Edición de los datos de un Tag en Ghost | Positivo |
|10| Cerrar Sesión | Cerrar una sesión activa en Ghost | Positivo |
|11| Listar Post | Consultar el listado de Posts/Publicaciones creado(a)s. | Positivo |
|12| Crear Página | Crear una pagina en el sitio, con configuraciones adicionales, tags, autores, titulo y descripción. | Positivo |
|13| Listar Páginas | Consultar el listado de Páginas creado(a)s. | Positivo |

El código de los escenarios de prueba implementados con Cypress se encuentra en el directorio [ghost-cypress-test](ghost-cypress-test).

### Instrucciones de ejecución

#### Prerequisitos

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Instalar la versión 3.41.1 de Ghost en su máquina local siguiendo el tutorial del siguiente enlace [Tutorial - Ghost](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0).
- Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

#### Instalar librerías

- Clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com:jpfeliciano/pruebas-e2e-ghost.git`

ó

`git clone https://github.com/jpfeliciano/pruebas-e2e-ghost.git`


- Ahora navegue hasta el subdirectorio `pruebas-e2e-ghost/ghost-cypress-test` con el siguiente comando:

`cd pruebas-e2e-ghost/ghost-cypress-test/`

- Finalmente instale las librerías requeridas:

`npm install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-cypress-test` y abra el archivo `cypress.json` en el editor de texto de su preferencia. Establezca el valor de las variables `email` y `password` con los valores que utilizó cuando creó la cuenta de usuario en Ghost.

#### Ejecución de las pruebas E2E

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-cypress-test` y ejecute el siguiente comando para probar todos los escenarios:

`./node_modules/.bin/cypress run -C cypress.json`

## Pruebas de regresión visual

Los 10 escenarios seleccionados para las pruebas de regresión visual pertenecen a 10 funcionalidades de Ghost descritas a continuación:

|Nº| Funcionalidad | Escenario | Tipo de Escenario |
|-| ------------- | ------------- | ------------- |
|1| Listar Posts/Publicaciones | Mostrar el listado de publicaciones creada en el sitio. | Positivo |
|2| Listar Páginas | Mostrar el listado de páginas creadas en el sitio. | Positivo |
|3| Listar Tags | Mostrar el listado de tags creados en el sitio. | Positivo |
|4| Ver Staff | Mostrar usuarios creados en el sitio. | Positivo |
|5| Crear Post/Publicación | Crear un Post/Publicación en Ghost. | Positivo |
|6| Crear Página | Creación de una página en Ghost | Positivo |
|7| Crear Tag | Creación de un Tag en Ghost | Positivo |
|8| Editar Perfil de Usuario | Edición de los datos del perfil de un usuario en Ghost | Positivo |
|9| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password correctos. | Positivo |
|10| Cerrar Sesión | Cerrar una sesión activa en Ghost. | Positivo |

El código de los escenarios de pruebas de extremo a extremo implementados con Cypress y la regresión visual implementada con ResembleJS se encuentran en el directorio [regresion-resemble-cypress](regresion-resemble-cypress).

#### Prerequisitos

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Instalar las versiones 3.3.0 y 3.41.1 de Ghost en su máquina local siguiendo el tutorial del siguiente enlace [Tutorial - Ghost](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0). Tenga en cuenta la asignación de un puerto diferente a cada instancia de Ghost. Para lograr este propósito, en la raíz del directorio de instalación de cada una de las instancias de Ghost abra el archivo `config.development.json` y establezca los valores de los atributos `url` y `port` tomando cómo referencia el siguiente ejemplo:

`"url": "http://localhost:2368/",`
  `"server": {`
    `"port": 2368,`
    `"host": "127.0.0.1"`
  `},`
- Una vez realizados estos ajustes, debe detener y reiniciar Ghost para que los cambios se apliquen.
- Crear una cuenta de usuario en cada una de las instancias de Ghost (Incluído en el tutorial del anterior punto).

#### Instalar librerías

- Clone el repositorio de pruebas en su máquina utilizando uno de los siguientes comandos:

`git clone git@github.com:jpfeliciano/pruebas-e2e-ghost.git`

ó

`git clone https://github.com/jpfeliciano/pruebas-e2e-ghost.git`


- Ahora navegue hasta el subdirectorio `pruebas-e2e-ghost/regresion-resemble-cypress` con el siguiente comando:

`cd pruebas-e2e-ghost/regresion-resemble-cypress/`

- Finalmente instale las librerías requeridas:

`npm install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/regresion-resemble-cypress` y abra los archivos `cypress.json` y `cypress-3.3.0.json` en el editor de texto de su preferencia. Estos archivos tienen varios parámetros de configuración que se utilizarán para ejecutar las pruebas sobre cada una de las versiones instaladas de Ghost. El archivo `cypress.json` contiene los parámetros de configuración de la instancia con la versión `3.41.1` de Ghost y el archivo `cypress-3.3.0.json` contiene los parámetros de configuración de la instancia con la versión `3.3.0` de Ghost. Establezca el valor de los siguientes parámetros en cada uno de los archivos de acuerdo con el valor que corresponda:

- `baseUrl`
- `ghostUrl`
- `ghostAuthUrl`
- `email`
- `password`

#### Ejecución de las pruebas E2E

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/regresion-resemble-cypress` y ejecute el siguiente comando para correr las pruebas de extremo a extremo, recopilar las evidencias durante la ejecución de cada paso, comparar las diferencias entre las imágenes recopiladas de cada versión y obtener un reporte consolidado con el resultado:

`./execute-regresion.sh`

Cuando finalice la ejecución del script vaya al directorio `cypress/results` y abra el archivo `report.html` para ver el resultado de la regresión visual.

#### Reporte defectos JIRA

Para el registro de incidencias se utilizo JIRA, el cual esta disponible en la siguiente URL(https://jpfeliciano.atlassian.net/jira/software/c/projects/GHOST)


## Pruebas E2E con generación de datos

Para la generación de pruebas se usaron las siguientes estrategias:

- Pool de datos a-priori.
- Pool de datos (pseudo) aleatorio dinámico.
- Escenario aleatorio. 

Para esto se tuvieron en cuenta parte de los escenarios construidos con kraken y cypress.

### Pool de datos a-priori

Para esta estrategia se utilizaron los escenarios de pruebas de extremo-a-extremo de Kraken. Los datos se generaron previamente definiendo un esquema en [Mockaroo](https://mockaroo.com/) y posteriormente previsualizando los datos en formato JSON para 2 registros, simulando la interacción de dos usuarios diferentes. El esquema creado se encuentra disponible en el siguiente enlace: [Esquema Kraken](https://mockaroo.com/8b9a5000).

El contenido de la previsualización en formato JSON es la data que se suministra durante la ejecución de la prueba. Para leer estos datos desde los escenarios de kraken los valores de la previsualización fueron copiados en el archivo de propiedades (properties.json), con lo que se obtienen 56 escenarios de prueba.

En la siguiente imágen se muestran los datos copiados en el apartado @user1 del archivo de propiedades: [Datos Usuario 1](https://uniandes-my.sharepoint.com/:i:/r/personal/h_arias_uniandes_edu_co/Documents/Semana_7_Pruebas_Automatizadas/Kraken_1.png?csf=1&web=1&e=dy2Ufc)

Así mismo los datos copiados en la sección @user2: [Datos Usuario 2](https://uniandes-my.sharepoint.com/:i:/r/personal/h_arias_uniandes_edu_co/Documents/Semana_7_Pruebas_Automatizadas/Kraken_2.png?csf=1&web=1&e=XIWO1J)

#### Instrucciones de ejecución

Antes de ejecutar las pruebas se deben completar las configuraciones definidas en las siguientes secciones:

- [Prerequisitos Kraken](#prerequisitos)
- [Definición de variables de entorno Kraken](#configuración-de-variables-de-entorno)

#### Instalar Kraken-Mobile desde el código fuente

- En su terminal, ejecute el siguiente comando:

`gem install bundler`

- Ahora descargue el código fuente de Kraken-Mobile a su máquina local. Para esto, ubíquese en el directorio donde se alojará el subdirectorio con las pruebas (paso siguiente), como el subdirectorio para Kraken-Mobile. Clone los fuentes de Kraken desde el siguiente repositorio: [KrakenMobile](https://github.com/TheSoftwareDesignLab/KrakenMobile).

- En el mismo directorio (padre) que contiene el código fuente de Kraken, clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com:jpfeliciano/pruebas-e2e-ghost.git`

ó

`git clone https://github.com/jpfeliciano/pruebas-e2e-ghost.git`


- Ahora navegue hasta el subdirectorio `pruebas-e2e-ghost/ghost-kraken-pool-data` con el siguiente comando:

`cd pruebas-e2e-ghost/ghost-kraken-pool-data/`

- Finalmente instale ruby y kraken:

`bundle install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-kraken-pool-data` y abra el archivo `properties.json` en el editor de texto de su preferencia. Establezca el valor de las variables `USERNAME` y `PASSWORD` con los valores que utilizó cuando creó la cuenta de usuario en Ghost.

#### Ejecución de las pruebas E2E con Kraken y datos a-priori

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-kraken-pool-data` y ejecute el siguiente comando para probar todos los escenarios:

`bundle exec kraken-mobile run --properties=./properties.json`

El comando anterior ejecuta todos los escenarios de prueba que se encuentran ubicados en el directorio `features`. Si se presentan errores durante la ejecución con el anterior comando, puede ejecutarlos de forma independiente tomando cómo referencia el siguiente (recomendado):

`bundle exec kraken-mobile run --feature="features/crear_tag_success.feature" --properties=./properties.json`

### Pool de datos (pseudo) aleatorio dinámico

Para la implementación de esta estrategia se crearon API's de prueba desde Mockaroo partiendo de la definición de esquemas para los escenarios de prueba seleccionados. Para ver el detalle de los esquemas y API's utilizados se debe crear una cuenta en Mockaroo utilizando el siguiente enlace [Create a Free Account](https://mockaroo.com/mock_apis).

En la siguiente tabla se detallan las funcionalidades seleccionadas de Ghost para la prueba, el link del esquema, el link con datos de ejemplo retornados por el API y la cantidad de escenarios generados:

| Funcionalidad | Esquema | API example | Escenarios |
| ------------- | ------------- | ------------- |-------|
| Crear Tag | https://mockaroo.com/schemas/297094 | https://my.api.mockaroo.com/tags.json?key=b36b1320 | 20 |
| Editar perfil de usuario | https://mockaroo.com/schemas/297086 | https://my.api.mockaroo.com/users.json?key=b36b1320 | 20 |

#### Instrucciones de ejecución

##### Prerequisitos

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Instalar la versión 3.41.1 de Ghost en su máquina local siguiendo el tutorial del siguiente enlace [Tutorial - Ghost](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0).
- Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).

##### Instalar librerías

- Clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com:jpfeliciano/pruebas-e2e-ghost.git`

ó

`git clone https://github.com/jpfeliciano/pruebas-e2e-ghost.git`


- Ahora navegue hasta el subdirectorio `pruebas-e2e-ghost/dynamic-data-cypress-test` con el siguiente comando:

`cd pruebas-e2e-ghost/dynamic-data-cypress-test/`

- Finalmente instale las librerías requeridas:

`npm install`

##### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/dynamic-data-cypress-test` y abra el archivo `cypress.json` en el editor de texto de su preferencia. Establezca el valor de las variables `ghostUrl`, `ghostAuthUrl`, `email` y `password` con los valores de configuración de la instancia de Ghost instalada.

##### Ejecución de las pruebas E2E con pool de datos (pseudo) aleatorio dinámico

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/dynamic-data-cypress-test` y ejecute el siguiente comando para probar todos los escenarios:

`./node_modules/.bin/cypress run -C cypress.json`

### Escenario aleatorio

Para esta estrategia se utilizaron los escenarios de pruebas de extremo-a-extremo de cypress. Los datos se generaron en cada escenario definiendo un esquema en faker, el cual se solicita la tupla que se necesita para escenario.
El contenido de la tupla se puede encontrar en el archivo cypress\plugins\index.js, en donde se encuentran las tareas para escenario ejecutado, los cuales están conformados 20 escenarios para creación de tags, 50 escenarios edición de la cuenta, 20 escenarios creación de post negativo. Para cambiar los datos usados para el esquema o la cantidad de escenarios, se puede dirigir al archivo anteriormente mencionado y realizar dicha configuración.

### Instrucciones de ejecución

- Una versión actualizada de Node.js instalada en su computadora.
- Una versión actualizada del manejador de paquetes npm instalada en su computadora. 
- Instalar la versión 3.41.1 de Ghost en su máquina local siguiendo el tutorial del siguiente enlace [Tutorial - Ghost](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0).
- Crear una cuenta de usuario en Ghost (Incluído en el tutorial del anterior punto).


#### Instalar librerías

- Clone el repositorio de pruebas utilizando uno de los siguientes comandos:

`git clone git@github.com:jpfeliciano/pruebas-e2e-ghost.git`

ó

`git clone https://github.com/jpfeliciano/pruebas-e2e-ghost.git`


- Ahora navegue hasta el subdirectorio `pruebas-e2e-ghost/ghost-cypress-pool-data-random` con el siguiente comando:

`cd pruebas-e2e-ghost/ghost-cypress-pool-data-random/`

- Finalmente instale las librerías requeridas:

`npm install`

#### Configuración de parámetros de ejecución

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-cypress-pool-data-random` y abra el archivo `cypress.json` en el editor de texto de su preferencia. Establezca el valor de las variables `email` y `password` con los valores que utilizó cuando creó la cuenta de usuario en Ghost.

#### Ejecución de las pruebas E2E con generación de datos faker

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-cypress-pool-data-random` y ejecute el siguiente comando para probar todos los escenarios:

`./node_modules/.bin/cypress run -C cypress.json`

## Ventajas y desventajas de las herramientas utilizadas para las pruebas de reconocimiento

En la siguiente página del proyecto se detallan los pros y contras que el equipo de pruebas encontró con cada una de las herramientas durante la implementación de las pruebas de reconocimiento:

[Pros y Contras pruebas de reconocimiento](https://github.com/jpfeliciano/pruebas-e2e-ghost/wiki/pros_contras-reconocimiento)

## Ventajas y desventajas de las herramientas utilizadas para las pruebas E2E

En la siguiente página del proyecto se detallan los pros y contras que el equipo de pruebas encontró con cada una de las herramientas durante la implementación de los escenarios de pruebas de extremo-a-extremo:

[Pros y Contras E2E](https://github.com/jpfeliciano/pruebas-e2e-ghost/wiki/pros_contras-e2e)

## Ventajas y desventajas de las herramientas utilizadas para las pruebas regresión visual

En la siguiente página del proyecto se detallan los pros y contras que el equipo de pruebas encontró con cada una de las herramientas durante la implementación de los escenarios E2E para las pruebas de regresión visual:

[Pros y Contras VRT](https://github.com/jpfeliciano/pruebas-e2e-ghost/wiki/pros_contras_vrt)
