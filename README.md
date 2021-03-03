# Repositorio pruebas E2E de Ghost con Kraken y Cypress

Este repositorio contiene 10 escenarios de pruebas de extremo-a-extremo (E2E) sobre la plataforma de gestión de contenido [Ghost](https://github.com/TryGhost/Ghost), cada escenario de prueba fue implementado con [Kraken](https://thesoftwaredesignlab.github.io/KrakenMobile/) y con [Cypress](https://www.cypress.io/). 

## Pruebas E2E con Kraken

Los escenarios seleccionados para las pruebas con Kraken pertenecen a 8 funcionalidades de Ghost detalladas a continuación:

| Funcionalidad | Escenario | Tipo de Escenario |
| ------------- | ------------- | ------------- |
| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password correctos. | Positivo |
| Iniciar sesión en la consola de administración | Incio de sesión con usuario y password incorrectos. | Negativo |
| Crear Post | Creación de un Post en Ghost. | Positivo |
| Editar Post | Edición de un Post en Ghost. | Positivo |
| Editar Post | Edición de un Post en Ghost. | Negativo |
| Crear Página | Creación de una página en Ghost | Positivo |
| Editar Perfil de Usuario | Edición de los datos del perfil de un usuario en Ghost | Positivo |
| Crear Tag | Creación de un Tag en Ghost | Positivo |
| Editar Tag | Edición de los datos de un Tag en Ghost | Positivo |
| Cerrar Sesión | Cerrar una sesión activa en Ghost | Positivo |

### Instrucciones de ejecución

#### Prerequisitos

- Ruby + DevKit, en una versión igual o superior a la 2.20. (Puede aprender más sobre la instalación en este enlace: https://www.ruby-lang.org/es/documentation/installation/).
- JDK instalado en una versión de Java igual o superior a la 8.
- SDK de Android instalado. (Puede aprender más sobre la instalación en este enlace: https://developer.android.com/studio).
- El driver Chromedriver instalado en su máquina. (Puede obtener el driver desde este enlace: https://chromedriver.chromium.org/downloads).
- Instalar la versión 3.41.1 de Ghost en su máquina local siguiendo el tutorial del siguiente enlace [Tutorial - Ghost](https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0).
- Crear una cuenta de usuario en Ghost (Incluído en el tuttorial del anterior punto).

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

#### Ejecución de las pruebas E2E

En una terminal ubíquese en el directorio `pruebas-e2e-ghost/ghost-kraken-test` y ejecute el siguiente comando para probar todos los escenarios:

`bundle exec kraken-mobile run --properties=./properties.json`

El comando anterior ejecuta todos los escenarios de prueba que se encuentran ubicados en el directorio `features`. Si se presentan errores durante la ejecución con el anterior comando, puede ejecutarlos de forma independiente tomando cómo referencia el siguiente (recomendado):

`bundle exec kraken-mobile run --feature="features/crear_tag_success.feature" --properties=./properties.json`

## Ventajas y desventajas de las herramientas utilizadas para las pruebas E2E

En la siguiente página del proyecto se detallan los pros y contras que el equipo de pruebas encontró durante la implementación de los escenarios de prueba:

[Pros y Contras]()

En el readme del repositorio detallen las funcionalidades y escenarios probados. No olviden hacer un resumen de los pros y los contras de cada herramienta. Este resumen lo deben dejar visible como una página en la wiki del repositorio.

