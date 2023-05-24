# Almacenamiento local y de sesión en JavaScript

En JavaScript, los objetos `localStorage` y `sessionStorage` proporcionan una forma de almacenar datos en el navegador web. Estas dos API son ampliamente utilizadas para almacenar información localmente en el lado del cliente.

## localStorage

El objeto `localStorage` permite almacenar datos persistentes en el navegador web. Los datos almacenados en `localStorage` persisten incluso después de cerrar y volver a abrir el navegador. Aquí tienes algunos ejemplos de cómo usarlo:

### Almacenar datos en localStorage

```javascript
// Guardar un valor en localStorage
localStorage.setItem('nombre', 'John');

// Guardar un objeto en localStorage
const persona = { nombre: 'John', edad: 30 };
localStorage.setItem('persona', JSON.stringify(persona));
```

### Obtener datos de localStorage

```javascript
// Obtener un valor de localStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre); // 'John'

// Obtener un objeto de localStorage
const personaJSON = localStorage.getItem('persona');
const persona = JSON.parse(personaJSON);
console.log(persona); // { nombre: 'John', edad: 30 }
```

### Eliminar datos de localStorage

```javascript
// Eliminar un valor de localStorage
localStorage.removeItem('nombre');

// Eliminar todos los datos de localStorage
localStorage.clear();
```

## sessionStorage

El objeto `sessionStorage` permite almacenar datos de sesión en el navegador web. Los datos almacenados en `sessionStorage` solo están disponibles durante la sesión actual del usuario y se eliminan cuando se cierra la pestaña o ventana del navegador. Aquí tienes algunos ejemplos de cómo usarlo:

### Almacenar datos en sessionStorage

```javascript
// Guardar un valor en sessionStorage
sessionStorage.setItem('color', 'azul');

// Guardar un objeto en sessionStorage
const opciones = { modo: 'oscuro', idioma: 'es' };
sessionStorage.setItem('opciones', JSON.stringify(opciones));
```

### Obtener datos de sessionStorage

```javascript
// Obtener un valor de sessionStorage
const color = sessionStorage.getItem('color');
console.log(color); // 'azul'

// Obtener un objeto de sessionStorage
const opcionesJSON = sessionStorage.getItem('opciones');
const opciones = JSON.parse(opcionesJSON);
console.log(opciones); // { modo: 'oscuro', idioma: 'es' }
```

### Eliminar datos de sessionStorage

```javascript
// Eliminar un valor de sessionStorage
sessionStorage.removeItem('color');

// Eliminar todos los datos de sessionStorage
sessionStorage.clear();
```

## Consideraciones adicionales

- Tanto `localStorage` como `sessionStorage` almacenan los datos como cadenas de texto. Si deseas guardar objetos JavaScript, debes convertirlos a JSON utilizando `JSON.stringify()` antes de almacenarlos y luego convertirlos nuevamente a objetos utilizando `JSON.parse()` al recuperarlos.
- Ambas API (`localStorage` y `sessionStorage`) tienen métodos similares como `getItem()`, `setItem()`, `removeItem()` y `clear()`, lo que facilita su uso y comprensión.

¡Y eso es todo! Ahora tienes una buena introducción a `localStorage` y `sessionStorage` en JavaScript. Estas API son útiles para almacenar datos localmente en el navegador y pueden ser utilizadas en una variedad de aplicaciones web.