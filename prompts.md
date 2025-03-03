```
tengo las siguientes consideraciones para que las tengas en cuenta, aún no vamos a empezar a realizar cambios, estas son las consideraciones para empezar:

1. comenzar desarrollo con tdd, creando primero los tests de los servicios del backend
2. usar docker para manejar la base de datos
3. crear proyecto backend
   donde desplegar el proyecto, sobre todo bakend y base de datos en hosts gratuitos.
4. crear schema base del backend y base de datos para crear el flujo de despliegue autonomo o ci/cd, para escalar a parti de este
5. partir desde las historias de usuario
   pasar la documentación del readme a cursor para que lo tome como base
   creación de pruebas de integración para probar que los endpoints funcionen según lo esperado, para facilitar pruebas de nuevos ajustes
```

```
Crea el proyecto base del backend en la carpeta @closeai-backend
```

Este script generó toda la estructura base del backend y la base de datos, procedemos a correr estos en local

```
Ahora vamos a iniciar el proyecto del backend y la base de datos, dame los pasos a seguir para correr en local.
```

Aquí se instalaron varias dependencias y se solucionaron problemas de compatibilidades

```
genera un simple curl basico para probar la conexion con el backend y la configuración que necesito para establecer conexión con la base de datos desde un gestor como dbeaver
```

```
Analiza el output de la terminal
```

aquí había fallado la instalación de algunas dependencias. Se instalaron y se corrio localmente el proyecto, pudiendo probar mediante curls los endpoint y la conexión a la base de datos
