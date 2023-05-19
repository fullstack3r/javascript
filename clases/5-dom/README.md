# Introducción a la conexión de JavaScript con HTML

La conexión entre JavaScript y HTML es fundamental para agregar interactividad y dinamismo a las páginas web. JavaScript es un lenguaje de programación del lado del cliente que se ejecuta en el navegador web y se utiliza para manipular y controlar los elementos de una página HTML. 

A continuación, veremos algunos de los métodos y eventos más comunes que se utilizan para conectar JavaScript con HTML.

## Eventos

Los eventos son acciones que ocurren en una página web, como hacer clic en un botón o mover el mouse. JavaScript permite capturar y responder a estos eventos mediante el uso de funciones de evento. A continuación, se muestra un ejemplo de cómo utilizar el evento `onclick` en un botón:

```html
<button onclick="miFuncion()">Haz clic</button>
```

En este ejemplo, se utiliza el atributo `onclick` para asignar la función `miFuncion()` al evento de hacer clic en el botón. Cuando el botón sea clicado, la función `miFuncion()` se ejecutará.

Existen muchos otros eventos, como `onmouseover` (cuando el mouse pasa por encima de un elemento), `onkeydown` (cuando se presiona una tecla) y `onload` (cuando la página se carga completamente), entre otros.

## Manipulación de elementos HTML

JavaScript permite acceder y manipular los elementos HTML de una página. Para ello, se utilizan los métodos y propiedades proporcionados por el Document Object Model (DOM). A continuación, se muestra un ejemplo de cómo acceder y modificar el contenido de un elemento `<div>`:

```html
<div id="miDiv">Texto inicial</div>

<script>
  var elemento = document.getElementById("miDiv");
  elemento.innerHTML = "Nuevo texto";
</script>
```

En este ejemplo, se utiliza el método `getElementById()` para obtener una referencia al elemento con el id "miDiv". A continuación, se utiliza la propiedad `innerHTML` para cambiar el contenido del elemento a "Nuevo texto".

Además de `getElementById()`, también existen otros métodos para acceder a los elementos, como `getElementsByTagName()` (obtener elementos por etiqueta) y `getElementsByClassName()` (obtener elementos por clase).

## Manipulación de estilos CSS

JavaScript también permite manipular los estilos CSS de los elementos HTML. Esto se puede lograr utilizando la propiedad `style` del elemento. A continuación, se muestra un ejemplo de cómo cambiar el color de fondo de un elemento `<div>` mediante JavaScript:

```html
<div id="miDiv" style="background-color: red;">Texto</div>

<script>
  var elemento = document.getElementById("miDiv");
  elemento.style.backgroundColor = "blue";
</script>
```

En este ejemplo, se accede al elemento `<div>` utilizando `getElementById()` y se modifica la propiedad `backgroundColor` de la propiedad `style` para cambiar el color de fondo a azul.

## Conclusión

La conexión de JavaScript con HTML permite agregar interactividad y dinamismo a las páginas web. Mediante el uso de eventos, se puede capturar y responder a las acciones del usuario, como hacer clic en un botón. Además, JavaScript ofrece métodos y propiedades para acceder y manipular los elementos HTML, así como para cambiar los estilos CSS de los elementos.

Estos conceptos básicos te darán una buena base para comenzar a trabajar con la conexión de JavaScript y HTML, pero hay muchos más aspectos que puedes explorar para profundizar en el tema.