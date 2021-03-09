# Repositorio pruebas E2E de Ghost con Kraken y Cypress

Este repositorio contiene 30 escenarios de pruebas de extremo-a-extremo (E2E) sobre la plataforma de gestión de contenido [Ghost](https://github.com/TryGhost/Ghost) implementados con [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/) y con [Cypress](https://www.cypress.io/).

Este repositorio ha sido construído por:

| Nombre | Correo Electrónico |
| ------------- | ------------- |
| Héctor Arias | h.arias@uniandes.edu.co |
| Juan Pablo Feliciano | jp.feliciano10@uniandes.edu.co |

## Contenido

- [Pruebas E2E con Kraken](#pruebas-e2e-con-kraken)
- [Pruebas E2E con Cypress](#pruebas-e2e-con-cypress)

## Pruebas E2E con Kraken

Los 26 escenarios seleccionados para las pruebas con Kraken pertenecen a 16 funcionalidades de Ghost descritas a continuación:

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
|24| Editar Vista | Editar campo nombre con un valor largo, el sistema debe informar la cantidad de caracteres. | Negativo |
|25| Editar Vista | Editar el nombre de la vista, con 1 caracter valido. | Positivo |
|26| Eliminar Vista | Ingresar a una vista personalizada y eliminarla. | Positivo |

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

|Nº|| Funcionalidad | Escenario | Tipo de Escenario |
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

Clone el repositorio de pruebas utilizando uno de los siguientes comandos:

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

## Ventajas y desventajas de las herramientas utilizadas para las pruebas E2E

En la siguiente página del proyecto se detallan los pros y contras que el equipo de pruebas encontró con cada una de las herramientas durante la implementación de los escenarios de prueba:

[Pros y Contras](https://github.com/jpfeliciano/pruebas-e2e-ghost/wiki/pros_contras-e2e)

