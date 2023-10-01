Hola, primero que todo queria aclarar que para poder implementar la internacionalizaicon y hacer de la mejor manera el readme decidi corregir y terminar el parcial que habia enviado.

Paso a paso:
1. Clonar el proyecto
2. Instalar los paquetes
3. Ejecutar el proyecto
4. Ingresar el correo (debe contener @uniandes.edu.co)
5. Oprimir siguiente
6. Ingresar contraseña (debe contener minimo 1 numero y ser de largo 6 minimo)
7. Oprimir siguiente
8. Esperar a que cargue la vista de los carros
9. Seleccionar un carro
10. Fin

Desiciones y proceso de desarrollo:
- Decidi hacer dos componentes de login ya que al tener dos verificaciones distintas senti que era mas sencillo separarlas. 
- Al inicio se me complico pasar el correo de login1 a login2, luego investigando me di cuenta que un componente podia coger informacion de su path, asi que el path de login2 incluye el nombre del correo para que este lo pueda usar
- Me di cuenta que tocaba poner una restriccion adicional para los login cuando estaban vacios
- Para separar el rol true del false, encerre todo el texto en un if del randomBoolean y dependiendo del valor mostraba input o p
- Para poder hacer la vista del detalle me toco usar css
- Los dos idiomas de internacionalizacion son español e ingles
- Para acceder a un detalle use la misma estrategia que con el login, pasando en el path el modelo que seria usado como llave para mostrar la informacion
- Se crearon los componentes login, login2, carros y carro
