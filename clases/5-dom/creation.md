# Creación y Eliminación del DOM desde JavaScript

El DOM (Document Object Model) es una representación estructurada de un documento HTML que permite acceder y manipular los elementos de la página web mediante JavaScript. En este documento, aprenderemos cómo crear nuevos elementos en el DOM y cómo eliminar elementos existentes utilizando solo JavaScript.

## Creación de elementos

Para crear un nuevo elemento en el DOM, podemos utilizar la función `document.createElement()` para crear un elemento vacío y luego configurar sus propiedades y atributos según sea necesario. A continuación se muestra un ejemplo de cómo crear un nuevo elemento `<div>` y agregarlo al DOM:

```javascript
// Crear un nuevo elemento <div>
var nuevoDiv = document.createElement('div');

// Configurar las propiedades del elemento
nuevoDiv.textContent = '¡Hola, mundo!';
nuevoDiv.setAttribute('class', 'mi-clase');

// Agregar el elemento al DOM
document.body.appendChild(nuevoDiv);
```

En este ejemplo, creamos un nuevo elemento `<div>` y le asignamos contenido de texto y un atributo de clase. Luego, utilizamos `appendChild()` para agregar el nuevo elemento al final del cuerpo del documento.

## Eliminación de elementos

Para eliminar un elemento del DOM, podemos utilizar el método `remove()` directamente en el elemento que deseamos eliminar. También podemos utilizar el método `removeChild()` en el elemento padre para eliminar un elemento hijo específico. A continuación se muestra un ejemplo de cómo eliminar un elemento del DOM:

```javascript
// Acceder al elemento que se desea eliminar
var elementoEliminar = document.getElementById('mi-elemento');

// Opción 1: Utilizando remove()
elementoEliminar.remove();

// Opción 2: Utilizando removeChild()
var padre = document.getElementById('contenedor');
padre.removeChild(elementoEliminar);
```

En este ejemplo, accedemos al elemento que deseamos eliminar utilizando su ID. Luego, utilizamos `remove()` para eliminar directamente el elemento o utilizamos `removeChild()` en el elemento padre para eliminar el elemento hijo específico.

Recuerda que al manipular el DOM con JavaScript, es importante asegurarse de que los elementos estén disponibles antes de acceder a ellos y de liberar adecuadamente los recursos cuando ya no se necesiten.

Estos son solo algunos ejemplos básicos de cómo crear y eliminar elementos en el DOM utilizando solo JavaScript. La manipulación del DOM nos brinda la capacidad de crear interfaces de usuario dinámicas y personalizadas en nuestras aplicaciones web.