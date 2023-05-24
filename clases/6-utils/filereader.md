
# FileReader en JavaScript

El objeto `FileReader` en JavaScript permite leer el contenido de archivos seleccionados por el usuario a través de un navegador web. Es especialmente útil cuando necesitamos realizar operaciones con archivos de forma asíncrona en el lado del cliente.

## Uso básico

El siguiente ejemplo muestra cómo utilizar `FileReader` para leer el contenido de un archivo y mostrarlo en una página web:

```javascript
// HTML
<input type="file" id="fileInput">
<div id="output"></div>

// JavaScript
const fileInput = document.getElementById('fileInput');
const outputDiv = document.getElementById('output');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const contents = event.target.result;
    outputDiv.textContent = contents;
  };

  reader.readAsText(file);
});
```

En este ejemplo, hemos creado un elemento `input` de tipo `file` para que el usuario pueda seleccionar un archivo. También hemos añadido un `div` donde mostraremos el contenido del archivo.

En JavaScript, hemos seleccionado el `input` y el `div` utilizando sus respectivos `id`. Luego, hemos añadido un evento `change` al `input` para escuchar cuando el usuario seleccione un archivo.

Dentro del controlador de eventos, obtenemos el archivo seleccionado mediante `event.target.files[0]` y creamos una instancia de `FileReader`. A continuación, asignamos una función de devolución de llamada al evento `onload` del `FileReader`. Cuando el archivo se haya cargado exitosamente, la función de devolución de llamada se ejecutará y podremos acceder al contenido del archivo a través de `event.target.result`.

Por último, utilizamos `readAsText(file)` en el `FileReader` para iniciar la lectura del archivo como texto.

<br/>

## Opciones adicionales

El objeto `FileReader` también proporciona otras opciones para leer archivos en diferentes formatos o realizar acciones específicas. Aquí hay algunos ejemplos:

### Leer como URL

```javascript
// JavaScript
reader.onload = (event) => {
  const imageUrl = event.target.result;
  const img = document.createElement('img');
  img.src = imageUrl;
  outputDiv.appendChild(img);
};

reader.readAsDataURL(file);
```

En este ejemplo, leemos el archivo como una URL utilizando `readAsDataURL(file)`. A continuación, creamos un elemento `img` y establecemos la URL como su fuente (`src`). Finalmente, agregamos la imagen al `div` de salida.

<br/>

### Leer como ArrayBuffer

```javascript
// JavaScript
reader.onload = (event) => {
  const arrayBuffer = event.target.result;
  // Realizar operaciones con el ArrayBuffer
};

reader.readAsArrayBuffer(file);
```

En este caso, leemos el archivo como un `ArrayBuffer` utilizando `readAsArrayBuffer(file)`. A partir de aquí, se pueden realizar diversas operaciones con el `ArrayBuffer`, como enviarlo al servidor o procesarlo de alguna otra manera.

## Conclusión

El objeto `FileReader` en JavaScript es una herramienta poderosa que nos permite leer archivos seleccionados por el usuario en una aplicación web. Podemos utilizarlo para leer archivos como texto, URLs o `ArrayBuffer`, según nuestras necesidades. Recuerda que el uso de `FileReader` implica operaciones asíncronas y debemos considerar la seguridad al trabajar con archivos cargados por el usuario.