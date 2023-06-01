# Introducción a `async` y `await` en JavaScript

En JavaScript, `async` y `await` son palabras clave que se utilizan en conjunto para simplificar el manejo de funciones asíncronas y promesas. Proporcionan una forma más legible y estructurada de escribir código asincrónico en comparación con el uso de callbacks o cadenas de promesas.

## Funciones `async`

Una función `async` es una función especial que siempre devuelve una promesa. Puedes declarar una función `async` utilizando la palabra clave `async` antes de la definición de la función.

```javascript
async function miFuncionAsincrona() {
  // Código asincrónico
}
```

Dentro de una función `async`, puedes utilizar la palabra clave `await` para esperar a que se resuelva una promesa antes de continuar con la ejecución.

## `await`

La palabra clave `await` solo se puede utilizar dentro de una función `async`. Indica que la ejecución del código debe detenerse hasta que la promesa se resuelva o se rechace.

```javascript
async function miFuncionAsincrona() {
  const resultado = await miPromesa();
  // Código para manejar el resultado
}
```

En el ejemplo anterior, `await` se utiliza para esperar a que `miPromesa()` se resuelva. La variable `resultado` almacenará el valor resuelto de la promesa. La ejecución del código dentro de la función `async` se pausará hasta que la promesa se resuelva.

## Ejemplo de uso de `async` y `await`

A continuación, se muestra un ejemplo que utiliza `async` y `await` para realizar una llamada a una API utilizando `fetch`:

```javascript
async function obtenerDatosDeAPI() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Error de red');
    }
    const data = await response.json();
    // Código para manejar los datos obtenidos
    console.log(data);
  } catch (error) {
    // Código para manejar errores
    console.error('Error:', error);
  }
}
```

En este ejemplo, la función `obtenerDatosDeAPI` se declara como una función `async`. Utilizamos `await` para esperar a que la respuesta de `fetch` se resuelva y luego convertimos los datos en formato JSON utilizando `response.json()`. El código dentro del bloque `try` se ejecutará si no se producen errores. Si hay algún error durante la llamada a la API o en el proceso de respuesta, se capturará en el bloque `catch` y se manejará adecuadamente.

## Conclusión

El uso de `async` y `await` en JavaScript proporciona una sintaxis más clara y legible para trabajar con código asincrónico. Puedes utilizar `await` para esperar a que las promesas se resuelvan dentro de funciones `async`, lo que facilita el manejo de la lógica asincrónica. ¡Aprovecha `async` y `await` para escribir un código más conciso y comprensible cuando trabajes con operaciones asíncronas en JavaScript!