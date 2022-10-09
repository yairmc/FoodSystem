# README
## Justificación de la BD
La base de datos elegida para el almacenamiento de datos en el proyecto “Food System” es Mysql, ya que al ser sql permite manejar grandes cantidades de datos con puntos de relación entre sí (Order, OrderProduct, Product), gestionándolos de forma segura y conforme a normas y un modo uniforme.

## Diagrama de clases
![](https://i.imgur.com/eLlUB2a.png)



## Operaciones referentes a bases de datos implementadas para cada entidad
Para que el gerente pueda hacer los casos de uso registrar, editar, eliminar, consultar usaurio se hizo un Crud de User, así como para que el mismo pueda editar, eliminar, consultar, registrar e inventariar producto se hizo un crud de Product, para que se puedan hacer los casos de uso tomar orden, actualizar estado de orden, modificar orden, consultar se hizo un crud de Order, para los casos de uso registrar, eliminar, editar, consultar mesa se hizo un crud de Table, para los casos de uso registrar ingrediente, editar ingrediente, eliminar ingrediente, inventariar y consultar ingrediente se hizo el crud de Ingredient.