# Objetos en JavaScript

En JavaScript, los objetos son estructuras de datos fundamentales que nos permiten almacenar y organizar información de manera eficiente. Son colecciones de pares clave-valor, donde cada clave es única y asociada a un valor específico. En este material, exploraremos cómo trabajar con objetos en JavaScript.

## 1. Creación de un objeto

Para crear un objeto en JavaScript, utilizamos la sintaxis de llaves (`{}`) y definimos sus propiedades como pares clave-valor separados por comas.

```javascript
const persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "Desarrollador"
};
```

En el ejemplo anterior, hemos creado un objeto llamado `persona` con tres propiedades: `nombre`, `edad` y `profesion`.

## 2. Acceso a las propiedades del objeto

Podemos acceder a las propiedades de un objeto utilizando la sintaxis de punto (`objeto.propiedad`) o la sintaxis de corchetes (`objeto["propiedad"]`).

```javascript
console.log(persona.nombre);     // "Juan"
console.log(persona["edad"]);    // 25
console.log(persona.profesion);  // "Desarrollador"
```

En el código anterior, hemos accedido a las propiedades del objeto `persona` utilizando ambas sintaxis.

## 3. Actualización de las propiedades del objeto

Podemos actualizar el valor de una propiedad existente de un objeto asignándole un nuevo valor.

```javascript
persona.edad = 30;
persona["profesion"] = "Ingeniero";
```

En el ejemplo anterior, hemos actualizado el valor de las propiedades `edad` y `profesion` del objeto `persona`.

## 4. Agregar propiedades al objeto

Podemos agregar nuevas propiedades a un objeto asignándoles un valor.

```javascript
persona.pais = "España";
persona["estadoCivil"] = "Soltero";
```

En el código anterior, hemos agregado las propiedades `pais` y `estadoCivil` al objeto `persona`.

## 5. Eliminar propiedades del objeto

Podemos eliminar propiedades de un objeto utilizando el operador `delete`.

```javascript
delete persona.edad;
delete persona["estadoCivil"];
```

En el ejemplo anterior, hemos eliminado las propiedades `edad` y `estadoCivil` del objeto `persona`.

## 6. Iteración sobre las propiedades del objeto

Podemos iterar sobre las propiedades de un objeto utilizando diferentes métodos, como `for...in` o `Object.keys()`.

```javascript
for (let key in persona) {
  console.log(key + ": " + persona[key]);
}

const propiedades = Object.keys(persona);
console.log(propiedades);
```

En el código anterior, hemos utilizado `for...in` para recorrer todas las propiedades del objeto `persona`, y `Object.keys()` para obtener un array con todas las claves del objeto.

## Conclusión

Los objetos son una parte fundamental de JavaScript y nos permiten almacenar y organizar información de manera eficiente. En este material, hemos aprendido cómo crear objetos, acceder a sus propiedades, actualizarlas, agregar nuevas propiedades y eliminarlas. También hemos explorado métodos para iterar sobre las propiedades de un objeto. Con este conocimiento, podrás utilizar objetos de manera efectiva para representar y manipular datos en tus aplicaciones JavaScript. ¡Sigue practicando y explorando las posibilidades que los objetos te ofrecen!