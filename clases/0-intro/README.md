# Introducción a la Programación con JavaScript

## **¿Qué es programar?… ¿Que es un programa? 🤔**

Los programas son conjuntos de instrucciones escritas que se utilizan para definir el flujo ejecución de un algoritmo; a este proceso de escritura de estos programas se le llama **programar.** Los programas pueden ser utilizados para una variedad de propósitos, desde crear páginas web, hacer aplicaciones para teléfonos o hasta controlar robots en una línea de producción.

## **Algoritmos**

Los algoritmos son **secuencias de pasos finitos y bien definidos** que resuelven un problema utilizando estructuras de control. En otras palabras, un algoritmo es un proceso para resolver un problema específico. Los algoritmos se utilizan en una variedad de campos, desde la informática hasta las matemáticas y la física.

Un ejemplo de algoritmo serían **los pasos** para hacer un pastel de chocolate, para armar un mueble o para tomarse un café. Cada paso se ejecuta en un orden específico y produce un resultado predecible dentro de ese contexto de orden.

![cafe.svg](../assets/images/cafe.svg)

## **Programas**

Un programa es una **secuencia de instrucciones o sentencias** que describen un algoritmo en un **lenguaje de programación específico**. Los programas se utilizan para una variedad de propósitos, desde crear páginas web interactivas hasta controlar robots en una línea de producción.

En los ejemplos de algoritmos anteriores el **programa** podría ser la receta de la preparación de ese pastel, o las instrucciones a realizar para tomarse café.

```javascript
// inicio

// Preguntar si quiere cafe
let want = confirm("Quieres cafe?");

if (want) {
  // Preguntar si hay cafe
  let coffe = confirm("hay cafe?");

  // Si hay cafe, calentar y si no hay cafe, hacer
  if (coffe) {
    alert("Calentando cafe...");
  } else {
    alert("Haciendo cafe...");
  }

  // Servir cafe
  alert("Sirviendo cafe...");

  // Añadir azucar al cafe
  let sugar = false;
  while (!sugar) {
    sugar = confirm("Esta bien de azucar?");
  }

  // Tomar cafe
  alert("Cafe listo para tomar!");
} else {
  alert("hasta luego!");
}
```

En resumen, la programación es la creación de algoritmos utilizando la escritura de programas como técnica y los lenguajes de programación como medio. Conocer estos conceptos clave es fundamental para comprender la programación y poder crear algoritmos correctamente.

## **¿Qué es JavaScript y para qué se utiliza?**

JavaScript es un lenguaje de programación que se utiliza para hacer que las páginas web sean más interactivas y dinámicas. Por ejemplo, cuando haces clic en un botón y aparece una ventana emergente, eso está utilizando JavaScript. Además, JavaScript se utiliza para validar los formularios en línea, crear animaciones y efectos visuales, enviar solicitudes al servidor y muchas otras cosas.

JavaScript es esencial para el desarrollo de sitios web modernos, ya que permite a los desarrolladores crear sitios web más atractivos y funcionales para los usuarios. También se utiliza en el desarrollo de aplicaciones web de servidor, que son aplicaciones que se ejecutan en el servidor y envían contenido a los navegadores web de los usuarios. Por ejemplo, sitios web como Google Maps utilizan JavaScript para mostrar mapas interactivos.

En resumen, JavaScript es un lenguaje de programación muy importante para el desarrollo web moderno. Si bien su uso principal es para crear interactividad en las páginas web, también se utiliza para crear aplicaciones móviles y de escritorio, y para muchas otras cosas.
