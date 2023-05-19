# Scope y Hoisting en JavaScript

En JavaScript, el concepto de scope y hoisting es fundamental para comprender cómo funcionan las variables y las funciones en diferentes contextos. En esta clase, exploraremos qué es el scope y cómo se aplica el hoisting en JavaScript.

## 1. Scope

El scope se refiere a la visibilidad y accesibilidad de las variables y funciones en diferentes partes de un programa. En JavaScript, existen dos tipos de scope: global y local.

- **Scope Global**: Las variables y funciones declaradas fuera de cualquier función tienen un alcance global, lo que significa que se pueden acceder desde cualquier parte del programa.

- **Scope Local**: Las variables y funciones declaradas dentro de una función tienen un alcance local, lo que significa que solo se pueden acceder dentro de esa función y sus funciones internas.

Veamos un ejemplo para ilustrar el concepto de scope:

```javascript
const nombre = "Juan"; // Variable global

function saludar() {
  const mensaje = "Hola, "; // Variable local
  console.log(mensaje + nombre);
}

saludar(); // Imprime "Hola, Juan"
console.log(mensaje); // Error: mensaje is not defined
```

En el código anterior, la variable `nombre` tiene un alcance global y se puede acceder tanto dentro como fuera de la función `saludar`. Por otro lado, la variable `mensaje` tiene un alcance local y solo se puede acceder dentro de la función `saludar`. Intentar acceder a `mensaje` fuera de la función resultará en un error.

## 2. Hoisting

El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su scope antes de que se ejecute el código. Esto significa que podemos utilizar variables y funciones antes de declararlas explícitamente en el código.

Veamos un ejemplo para comprender el hoisting:

```javascript
saludar(); // Imprime "Hola, Juan"

function saludar() {
  const nombre = "Juan";
  console.log("Hola, " + nombre);
}
```

En el código anterior, hemos llamado a la función `saludar` antes de su declaración. Esto es posible debido al hoisting. Durante la fase de compilación, JavaScript mueve la declaración de la función `saludar` al inicio del scope actual, lo que nos permite llamar a la función antes de su definición.

Sin embargo, es importante tener en cuenta que solo la declaración de la función se mueve al inicio del scope, no la asignación de variables o funciones. Por lo tanto, si intentamos acceder a una variable antes de declararla, obtendremos un valor `undefined`.

```javascript
console.log(edad); // Imprime "undefined"
var edad = 30;
```

En este ejemplo, la declaración de la variable `edad` se mueve al inicio del scope, pero la asignación de valor (`30`) permanece en su posición original. Por lo tanto, al intentar acceder a `edad` antes de su declaración, obtendremos `undefined`.

## Conclusión

El scope y el hoisting son conceptos clave en JavaScript. El scope determina la visibilidad y accesibilidad de las variables y funciones, mientras que el hoisting mueve las declaraciones de variables y funciones al inicio de su scope durante la fase de compilación.

Comprender cómo funciona el scope y el hoisting te permitirá escribir código más limpio y evitar errores comunes. Recuerda que es buena práctica declarar las variables y
