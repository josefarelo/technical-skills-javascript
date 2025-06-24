**Este repositorio contiene una colección completa de ejercicios de JavaScript, organizados en módulos temáticos que abarcan desde los fundamentos del lenguaje hasta arquitecturas avanzadas como microservicios y serverless.**


## 01 - Fundamentos de JavaScript

- variables-and-data-types.js

_Declaración de variables usando var, let y const, y comprensión de tipos primitivos y objetos._

- control-flow.js

_Uso de instrucciones condicionales y bucles (if, else, switch, for, while)._

- functions.js

_Declaración y uso de funciones en JavaScript, incluyendo funciones anónimas y de flecha._

- scope-and-hoisting.js

_Cómo funcionan los ámbitos léxicos y el comportamiento de elevación de variables en JavaScript._

- closures.js

_Funciones que capturan el estado de su entorno de creación, permitiendo acceso a variables externas incluso después de finalizar su contexto original._

- this-context.js

_Cómo funciona el contexto de ejecución y cómo cambiarlo en JavaScript._

- events.js

_Manejo de eventos en JavaScript, incluyendo el registro de eventos y la propagación._

- error-handling.js

_Captura y manejo de errores usando try, catch y finally._


## 02 - Programación Orientada a Objetos en JavaScript

- objects-and-properties.js

_Creación y manipulación de objetos, así como el acceso a sus propiedades._

- prototypes-inheritance.js

_Cómo funciona la herencia basada en prototipos en JavaScript._

- classes-and-modern-syntax.js

_Uso de las clases en JavaScript moderno con las palabras clave class, extends y super._

- encapsulation-inheritance-polymorphism.js

_Principios fundamentales de la programación orientada a objetos aplicados en JavaScript._

- factory-functions.js

_Funciones que retornan nuevos objetos personalizados, permitiendo flexibilidad en la creación de instancias._

- object-composition.js

_Construcción de objetos complejos a partir de otros más simples, en lugar de usar herencia._


## 03 - Conceptos de programación funcional

- pure-functions.js

_Funciones que, dado un mismo conjunto de entradas, siempre devuelven la misma salida sin producir efectos secundarios._

- immutability.js

_Principio de no modificar directamente los datos existentes, sino crear nuevas estructuras de datos._

- higher-order-functions.js

_Funciones que aceptan otras funciones como argumentos o las retornan como resultados._

- currying.js

_Transformación de una función que toma múltiples argumentos en una serie de funciones que toman un solo argumento._

- function-composition.js

_Técnica que permite encadenar funciones pequeñas en una sola función compleja._

- functors-and-categories.js

_Estructuras que permiten mapear funciones sobre valores envueltos o estructurados._

- monads.js

_Patrón que permite encadenar operaciones, manejando contextos como la asincronía o el manejo de errores._

- lenses.js

_Herramientas para acceder y modificar estructuras de datos inmutables de forma segura._

- transducers.js

_Funciones que transforman otras funciones de transformación, permitiendo operaciones eficientes sobre estructuras de datos._


## 04 - Estructuras de Datos y Algoritmos

- arrays-objects-sets-and-maps.js

_Uso de estructuras de datos como arrays, objetos, sets y maps para almacenar y manipular información._

- stacks-and-queues.js

_Estructuras de datos lineales que permiten operaciones de inserción y eliminación en un orden específico (LIFO y FIFO)._

- linked-lists.js

_Estructura de datos donde cada elemento apunta al siguiente, permitiendo inserciones y eliminaciones eficientes._

- recursion.js

_Técnica donde una función se llama a sí misma para resolver problemas complejos._

- array-operations.js

_Funciones de orden superior para transformar, filtrar y reducir arrays en JavaScript._

- sorting-algorithms.js

_Implementación de algoritmos de ordenamiento como bubble sort, quicksort y merge sort._

- search-algorithms.js

_Algoritmos de búsqueda como búsqueda lineal y búsqueda binaria para encontrar elementos en estructuras de datos._

- abstract-data-types.js

_Tipos de datos abstractos como pilas, colas y listas que definen operaciones sin especificar su implementación concreta._


## 05 - Programación Asíncrona

- callbacks.js

_Funciones que se ejecutan después de completar una operación asíncrona, permitiendo la continuación de un flujo de ejecución._

- promises.js

_Objeto que representa la terminación o el fracaso eventual de una operación asíncrona._

- async-await.js

_Sintaxis que simplifica el manejo de operaciones asíncronas, haciendo que el código sea más legible y fácil de entender._

- asynchronous-error-handling.js

_Manejo de errores en operaciones asíncronas utilizando bloques try, catch y finally._

- event-loop.js

_Mecanismo que permite que JavaScript maneje múltiples operaciones simultáneamente a través de un ciclo de eventos._

- promise-lifecycle.js

_Etapas de una promesa en JavaScript: pendiente, cumplida o rechazada._


## 06 - Principios y Buenas Prácticas

- element-of-javascript-style.js

_Conjunto de convenciones y estilos recomendados para escribir código JavaScript limpio y legible._

- solid-principles.js

_Conjunto de principios para escribir código que sea mantenible, escalable y fácil de entender._

- dry.js

_Principio que recomienda evitar la duplicación de código para mejorar la mantenibilidad._

- kiss.js

_Principio que sugiere mantener el código simple y directo, evitando la complejidad innecesaria._

- yagni.js

_Principio que recomienda no implementar características innecesarias hasta que sean realmente necesarias._


## 07 - Pruebas Automatizadas

- unit-testing

_Escritura de pruebas automatizadas para verificar funcionalidades específicas de manera aislada._

- integration-testing.js

_Pruebas que evalúan cómo interactúan diferentes componentes del sistema entre sí._

- end-to-end-testing.js

_Pruebas que simulan el flujo completo de una aplicación para asegurar su correcto funcionamiento desde el principio hasta el fin._

- mocking-is-a-code-smell.js

_Evitar el uso excesivo de mocks en las pruebas, ya que puede ser un indicador de un diseño débil._

- code-coverage

_Métrica que indica qué porcentaje del código ha sido ejecutado por las pruebas automatizadas._


## 08 - Herramientas del Ecosistema Moderno

- npm

_Herramienta para gestionar paquetes y dependencias en proyectos JavaScript._

- babel-and-transpilation.js

_Uso de Babel para convertir código moderno de JavaScript en una versión compatible con navegadores más antiguos._

- webpack-and-modern-bundlers

_Herramientas para empaquetar y optimizar archivos de código JavaScript para su uso en producción._

- eslint-and-code-formatting.js

_Herramientas para mantener un estilo de código consistente y detectar errores potenciales en JavaScript._


## 09 - Interacción con el Navegador y APIs Web

- dom-manipulation

_Acceso y modificación de elementos HTML usando JavaScript para actualizar dinámicamente el contenido de una página._

- dom-events.html

_Gestión de eventos en el Document Object Model para interactuar con elementos de la página web._

- fetch-api-and-http-requests.js

_Realización de solicitudes HTTP para comunicarse con servidores y obtener o enviar datos._

- web-apis.js

_Uso de APIs nativas del navegador, como localStorage, sessionStorage y Geolocation._


## 10 - Arquitectura y Patrones

- design-patterns.js

_Implementación de patrones de diseño comunes como Factory, Singleton, Observer y otros en JavaScript._

- dependency-management

_Gestión eficiente de dependencias en proyectos JavaScript utilizando herramientas como NPM o Yarn._

- clean-architecture-principles

_Principios de arquitectura que permiten escribir código modular, mantenible y fácil de escalar._

- microservices

_Uso de microservicios para dividir una aplicación en servicios pequeños e independientes usando Node.js._

- serverless-architecture

_Implementación de funciones serverless usando JavaScript en plataformas como AWS Lambda o Google Cloud Functions._

- injection-unit-investment.js

_Aplicación del principio de inversión de dependencias para desacoplar módulos usando técnicas de inyección de dependencias._