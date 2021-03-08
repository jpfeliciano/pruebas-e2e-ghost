#!/bin/bash

echo -e "**** Ejecución de pruebas E2E en la versión 3.3.0 de Ghost **** \n"
./node_modules/.bin/cypress run -C cypress-3.3.0.json -b chrome

echo -e "**** Ejecución de pruebas E2E en la versión 3.41.1 de Ghost **** \n"
./node_modules/.bin/cypress run -C cypress.json -b chrome

echo "**** Análisis de resultados con ResembleJS **** \n"
node main.js