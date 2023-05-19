
# Ejercicio: Registro de Proyectos

## Descripción del ejercicio
En este ejercicio, se te solicita crear un formulario para registrar proyectos utilizando JavaScript. Deberás utilizar arrays, objetos y manipulación del DOM para almacenar y mostrar la información de los proyectos.

## Instrucciones
1. Crea un formulario HTML que contenga los siguientes campos:
   - Nombre del proyecto (campo de texto)
   - Descripción del proyecto (área de texto)
   - Responsable del proyecto (campo de texto)
   - Estado del proyecto (lista desplegable con opciones: "En progreso", "Completado", "Cancelado")
2. Añade un botón "Registrar" al formulario para enviar la información.
3. Crea un objeto `Proyecto` con las siguientes propiedades:
   - `nombre`: Nombre del proyecto
   - `descripcion`: Descripción del proyecto
   - `responsable`: Responsable del proyecto
   - `estado`: Estado del proyecto
4. Crea un array `proyectos` vacío para almacenar los proyectos registrados.
5. Asocia un evento al botón "Registrar" para que, al hacer clic, se capturen los valores de los campos del formulario y se cree un nuevo objeto `Proyecto` con esos valores.
6. Agrega el objeto `Proyecto` al array `proyectos`.
7. Actualiza el DOM para mostrar la lista de proyectos registrados. Cada proyecto debe mostrarse en una nueva fila de una tabla, con las siguientes columnas:
   - Nombre del proyecto
   - Descripción del proyecto
   - Responsable del proyecto
   - Estado del proyecto

## Requisitos adicionales
- Implementa validaciones básicas en el formulario para asegurarte de que se ingresen valores válidos en los campos.
- Agrega la opción de editar y eliminar proyectos registrados.
- Utiliza CSS para mejorar la apariencia del formulario y la tabla de proyectos.