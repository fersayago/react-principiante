# Introducción a React.js

## Clase 1: Introducción a Ract
### Componentes
Los componentes son bloques de codigo en los cuales podremos dividir ciertas secciones dentro de un proyecto React. Esto permite la modularización del sitio y un envio de información preciso entre componentes padre e hijo.

Armado de componentes:
- En base a su estructura
  - De Clase: Se declara como clase y extiende de React.Component (en desuso)
  - Funcinal: Se almacena como una función
  - Arrow: Se declara como una constante
- En base a estado:
  -  Stateless: Componentes sin estado
  -  Stateful: Componentes con estado


### Propiedades
A veces es necesario enviar información a un componente por lo que se crean las propiedades. Esto permite tener un template de cierto tipo de componentes pero que solo varien en los parametros que pasemos como propiedad (titulo de un parrafo, parrafo, colores, etc)

#### Declarar propiedades
Las propiedades pueden ser declaradas en 3 lugares:
- Dentro de la declaración de la función se pueden definir que se recibe por props.
- Se puede crear variables y asignarles el valor del campo props que requerimos
- Se puede acceder directamente a las propiedades desde el renderizado anteponiendo el `props.` al parametro que necesitemos