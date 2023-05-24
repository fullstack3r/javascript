# Temporizadores y Intervalos en JavaScript

En JavaScript, los temporizadores y los intervalos son herramientas que nos permiten programar la ejecución de código en momentos específicos o repetidamente a intervalos regulares. Estas características son útiles para tareas asíncronas y acciones periódicas.

## Temporizador

Un temporizador nos permite ejecutar una función después de un cierto tiempo. En JavaScript, se crea un temporizador utilizando la función `setTimeout()`. Para cancelar o eliminar un temporizador, utilizamos la función `clearTimeout()`.

### Crear un temporizador

```javascript
var temporizador = setTimeout(función, tiempo);
```

- `función`: La función que se ejecutará cuando se cumpla el tiempo especificado.
- `tiempo`: El tiempo, en milisegundos, que debe transcurrir antes de que se ejecute la función.

El método `setTimeout()` devuelve un identificador que se puede utilizar para referenciar y cancelar el temporizador.

### Cancelar un temporizador

```javascript
clearTimeout(temporizador);
```

- `temporizador`: El identificador del temporizador que se desea cancelar.

Llamando a `clearTimeout()` con el identificador del temporizador, se cancelará la ejecución de la función asociada al temporizador y evitará que se ejecute.

## Intervalo

Un intervalo nos permite ejecutar una función repetidamente a intervalos regulares. En JavaScript, se crea un intervalo utilizando la función `setInterval()`. Para detener o eliminar un intervalo, utilizamos la función `clearInterval()`.

### Crear un intervalo

```javascript
var intervalo = setInterval(función, tiempo);
```

- `función`: La función que se ejecutará en cada intervalo de tiempo.
- `tiempo`: El intervalo de tiempo, en milisegundos, entre cada ejecución de la función.

El método `setInterval()` devuelve un identificador que se puede utilizar para referenciar y detener el intervalo.

### Detener un intervalo

```javascript
clearInterval(intervalo);
```

- `intervalo`: El identificador del intervalo que se desea detener.

Llamando a `clearInterval()` con el identificador del intervalo, se detendrá la ejecución de la función asociada al intervalo y evitará que se siga ejecutando repetidamente.
 

Recuerda que es importante utilizar `clearTimeout()` y `clearInterval()` para evitar que los temporizadores y los intervalos sigan ejecutándose innecesariamente y consumiendo recursos.

Estas herramientas son útiles para controlar el tiempo en nuestras aplicaciones y ejecutar acciones en momentos específicos o de forma periódica.
