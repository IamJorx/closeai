> Detalla en esta sección los prompts principales utilizados durante la creación del proyecto, que justifiquen el uso de asistentes de código en todas las fases del ciclo de vida del desarrollo. Esperamos un máximo de 3 por sección, principalmente los de creación inicial o los de corrección o adición de funcionalidades que consideres más relevantes.
> Puedes añadir adicionalmente la conversación completa como link o archivo adjunto si así lo consideras

## Índice

1. [Descripción general del producto](#1-descripción-general-del-producto)
2. [Arquitectura del sistema](#2-arquitectura-del-sistema)
3. [Modelo de datos](#3-modelo-de-datos)
4. [Especificación de la API](#4-especificación-de-la-api)
5. [Historias de usuario](#5-historias-de-usuario)
6. [Tickets de trabajo](#6-tickets-de-trabajo)
7. [Pull requests](#7-pull-requests)

---

## 1. Descripción general del producto

**Prompt 1:**

```
# Contexto del Proyecto
Estoy desarrollando un sistema basado en IA para analizar y comparar transacciones bancarias de archivos Excel. El sistema debe:
1. Permitir la carga de dos archivos Excel con registros de transacciones bancarias.
2. Analizar y encontrar coincidencias entre las transacciones basadas en ciertos criterios clave (id_transaccion, fecha, cuenta_origen, cuenta_destino, monto).
3. Detectar discrepancias en los estados de las transacciones (Ej: Exitosa vs Fallida).
4. Resolver problemas comunes como:
   - Diferencias en nombres de columnas (id_transaccion vs id de transacción).
   - Formatos de fecha distintos (2025-02-10 vs 10/02/2025).
   - Variaciones menores en los montos ($500.00 vs 500,00).

# Implementación
Estoy utilizando IA para mejorar la comparación de transacciones cuando los datos no coinciden exactamente. La arquitectura actual del proyecto incluye:
- **Python + Pandas** para procesamiento de datos.
- **FAISS (Facebook AI Similarity Search)** para buscar transacciones similares usando embeddings.
- **SentenceTransformers (BERT, MiniLM, etc.)** para generar embeddings de transacciones.
- **Excel como formato de entrada y salida**, con un archivo final que contiene:
   - **Coincidencias exactas** de transacciones.
   - **Coincidencias con discrepancias** en estado/monto.
   - **Registros que deben revisarse manualmente**.

# Objetivo
El objetivo es seguir desarrollando este sistema, optimizando su precisión y eficiencia. Quiero que ChatGPT continúe ayudándome con:
- Mejoras en el código y optimización del pipeline.
- Evaluación de rendimiento de FAISS y embeddings.
- Implementación de una API para integrar el procesamiento en una app web.
- Pruebas con datos reales y detección de errores.
- Recomendaciones de herramientas y mejoras en la lógica de comparación.

# Preferencias
- Quiero que ChatGPT recuerde el contexto del proyecto y proponga soluciones basadas en las tecnologías mencionadas.
- Si hay una forma más eficiente de implementar algo, quiero sugerencias específicas con código.
- Si alguna parte del pipeline puede mejorarse con otro enfoque, quiero entender **por qué y cómo** hacerlo.
- Prefiero soluciones que puedan escalar bien si trabajo con archivos grandes.
```

**Prompt 2:**

```
Ahora tenemos que empezar a construir la documentación del proyecto, para cada sección hay que registrar los prompt utilizados para construir esa parte de la documentación. Aquí están los formatos de la documentación del proyecto y de el archivo donde se van a documentar los prompts utilizados, aún no empieces a sugerir nada, pues iremos paso a paso según lo indique.

Empecemos con la documentación, por la primera parte del proyecto "descripción breve del proyecto", en base a la documentación y contexto proporcionado, sugiere:
1. una descripción breve del proyecto, el proyecto tiene como nombre "Close AI"
2. Objetivo:
   - Propósito del producto. Qué valor aporta, qué soluciona, y para quién.
3. Características y funcionalidades principales:
   - Enumera y describe las características y funcionalidades específicas que tiene el producto para satisfacer las necesidades identificadas.
4. Diseño y experiencia de usuario:
   - Proporciona imágenes y/o videotutorial mostrando la experiencia del usuario desde que aterriza en la aplicación, pasando por todas las funcionalidades principales.
5. Instrucciones de instalación:
   - Documenta de manera precisa las instrucciones para instalar y poner en marcha el proyecto en local (librerías, backend, frontend, servidor, base de datos, migraciones y semillas de datos, etc.)
   - El frontend será una aplicación en next y el backend una api en fastapi
   - Base de datos: postgresql
```

**Prompt 3:**

```
Renueva la documentación del proyecto en el @reamde.md, actualizando la sección de instalación del proyecto, en base a los cambios realizados en el proyecto. Incluye las instrucciones para instalar el proyecto en local, para el frontend y para el backend, tanto usando docker como env local.
```

---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**

**Prompt 1:**

```
Ahora continuaremos con la documentación, por la sección "Diagrama de arquitectura", en base a la documentación y contexto proporcionado, sugiere:
1. Un diagrama de arquitectura del proyecto, que muestre los componentes principales y su interacción.
2. Una descripción de cada componente y su responsabilidad.
3. Las tecnologías y herramientas que se utilizarán para cada componente.

usa el formato que consideres más adecuado para representar los componentes principales de la aplicación y las tecnologías utilizadas. Explica si sigue algún patrón predefinido, justifica por qué se ha elegido esta arquitectura, y destaca los beneficios principales que aportan al proyecto y justifican su uso, así como sacrificios o déficits que implica.

Usa la estrategia DaC (document as code) para generar el diagrama de arquitectura.

Antes de empezar sugiere que formatos de DaC podríamos utilizar para generar el diagrama de arquitectura.
```

**Prompt 2:**

```
genera un prompt para la creación del diagrama de arquitectura de el proyecto close ai para el programa diagramgpt
```

**Prompt 3:**

```

```

### **2.2. Descripción de componentes principales:**

**Prompt 1:**

```
continuamos con el siguiente punto: ### **2.2. Descripción de componentes principales:**

> Describe los componentes más importantes, incluyendo la tecnología utilizada. Ten en cuenta que no se van a guardar los archivos de excel generados(se van a descargar desde la interfaz de usuario), proporciona la respuesta en un bloque texto en texto plano markdown para copiar facilmente. Se breve y conciso en las definiciones
```

**Prompt 2:**

```

```

**Prompt 3:**

```

```

### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

**Prompt 1:**

```
Ahora definamos el siguiente punto: ### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

> Representa la estructura del proyecto y explica brevemente el propósito de las carpetas principales, así como si obedece a algún patrón o arquitectura específica.
```

**Prompt 2:**

```
En base a los nuevos cambios y los tests que se han creado, actualiza la documentación de alto nivel del proyecto y la estructura de ficheros en el archivo @readme.md
```

**Prompt 3:**

```

```

### **2.4. Infraestructura y despliegue**

**Prompt 1:**

```
Continuamos con la siguiente definición: ### **2.4. Infraestructura y despliegue**

> Detalla la infraestructura del proyecto, incluyendo un diagrama en el formato que creas conveniente, y explica el proceso de despliegue que se sigue
```

**Prompt 2:**

```
en las instrucciones de despliegue ten en cuenta que el front se desplegará en vercel cada que se haga push a la rama main
```

**Prompt 3:**

```
has las instrucciones de despliegue mas concisas, asume que ya tengo configurado variables de entorno, conexiones a los servicios etc
```

### **2.5. Seguridad**

**Prompt 1:**

```
continuemos con la siguiente definición: ### **2.5. Seguridad**

> Enumera y describe las prácticas de seguridad principales que se han implementado en el proyecto, añadiendo ejemplos si procede
```

**Prompt 2:**

```
como la documentación es para el mvp de este proyecto, quiero manejar de la forma mas sencilla posible el acceso al uso de la herramienta, no quiero destinar muchos recursos a la parte de autenticación de usuarios, que alternativa podría usar?
```

**Prompt 3:**

```

```

### **2.6. Tests**

**Prompt 1:**

```
Ahora vamos a definir los tests, sugiere los principales tests que debería implementar para mi aplicación, de forma breve y clara
```

**Prompt 2:**

```
Según los tests que hemos creado, para las pruebas unitarias y de integración, para probar los servicios de la api, completa la información en el archivo @readme.md correspondiente a la documentación de los tests realizados.
```

**Prompt 3:**

```

```

---

### 3. Modelo de Datos

**Prompt 1:**

```
Ahora define la parte del modelo de datos: ## 3. Modelo de Datos

### **3.1. Diagrama del modelo de datos:**

> Recomendamos usar mermaid para el modelo de datos, y utilizar todos los parámetros que permite la sintaxis para dar el máximo detalle, por ejemplo las claves primarias y foráneas.

### **3.2. Descripción de entidades principales:**

> Recuerda incluir el máximo detalle de cada entidad, como el nombre y tipo de cada atributo, descripción breve si procede, claves primarias y foráneas, relaciones y tipo de relación, restricciones (unique, not null…), etc.
```

**Prompt 2:**

```

```

**Prompt 3:**

```

```

---

### 4. Especificación de la API

**Prompt 1:**

```
Define los endpoints principales de mi aplicación: ## 4. Especificación de la API

> Si tu backend se comunica a través de API, describe los endpoints principales (máximo 3) en formato OpenAPI. Opcionalmente puedes añadir un ejemplo de petición y de respuesta para mayor claridad
```

**Prompt 2:**

```
Se relaizaron algunos cambios en la api, especificamente en el endpoint de upload de archivos, actualiza la documentación de la api en base a los cambios realizados.
```

**Prompt 3:**

```

```

---

### 5. Historias de Usuario

**Prompt 1:**

```
Ahora creemos algunas historias de usuario para nuestro proyecto, sigue las siguientes instrucciones:

## 5. Historias de Usuario

> Documenta 3 de las historias de usuario principales utilizadas durante el desarrollo, teniendo en cuenta las buenas prácticas de producto al respecto.

Estructura basica de una User Story
Formato estándar: "Como [tipo de usuario], quiero [realizar una acción] para [obtener un beneficio]".
Descripción: Una descripción concisa y en lenguaje natural de la funcionalidad que el usuario desea.
Criterios de Aceptación: Condiciones específicas que deben cumplirse para considerar la User Story como "terminada", éstos deberian de seguir un formato similar a “Dado que” [contexto inicial], "cuando” [acción realizada], “entonces” [resultado esperado].
Notas adicionales:  Notas que puedan ayudar al desarrollo de la historia
Tareas: Lista de tareas y subtareas para que esta historia pueda ser completada
```

**Prompt 2:**

```

```

**Prompt 3:**

```

```

---

### 6. Tickets de Trabajo

**Prompt 1:**

```
Ahora definamos los tickets de trabajo, sigue las siguientes instrucciones:

## 6. Tickets de Trabajo

> Documenta 3 de los tickets de trabajo principales del desarrollo, uno de backend, uno de frontend, y uno de bases de datos. Da todo el detalle requerido para desarrollar la tarea de inicio a fin teniendo en cuenta las buenas prácticas al respecto.

Ten en cuenta los siguientes aspectos de un ticket de trabajo:
Componentes de un Ticket de trabajo
Un ticket de trabajo efectivo debe contener toda la información necesaria para que cualquier miembro del equipo comprenda y ejecute la tarea adecuadamente. Aquí se enumeran los elementos más importantes que debería incluir un ticket de trabajo para maximizar su claridad y eficacia:

1. Título Claro y Conciso

Un resumen breve que refleje la esencia de la tarea. Debe ser lo suficientemente descriptivo para que cualquier miembro del equipo entienda rápidamente de qué se trata el ticket.

2. Descripción Detallada

Propósito: Explicación de por qué es necesaria la tarea y qué problema resuelve.
Detalles Específicos: Información adicional sobre requerimientos específicos, restricciones, o condiciones necesarias para la realización de la tarea.
3. Criterios de Aceptación

Expectativas Claras: Lista detallada de condiciones que deben cumplirse para que el trabajo en el ticket se considere completado.
Pruebas de Validación: Pasos o pruebas específicas que se deben realizar para verificar que la tarea se ha completado correctamente.
4. Prioridad

Nivel de Urgencia: Una clasificación de la importancia y la urgencia de la tarea, lo cual ayuda a determinar el orden en que deben ser abordadas las tareas dentro del backlog.
5. Estimación de Esfuerzo

Puntos de Historia o Tiempo Estimado: Una evaluación del tiempo o esfuerzo que se espera que tome completar el ticket. Esto es esencial para la planificación y gestión del tiempo del equipo.
6. Asignación

Responsable: Quién o qué equipo será responsable de completar la tarea. Esto asegura que todos los involucrados entiendan quién está a cargo de cada parte del proyecto.
7. Etiquetas o Tags

Categorización: Etiquetas que ayudan a clasificar el ticket por tipo (bug, mejora, tarea, etc.), por características del producto (UI, backend, etc.), o por sprint/versión.
8. Comentarios y Notas

Colaboración: Espacio para que los miembros del equipo agreguen información relevante, hagan preguntas, o proporcionen actualizaciones sobre el progreso de la tarea.
9. Enlaces o Referencias

Documentación Relacionada: Enlaces a documentos, diseños, especificaciones o tickets relacionados que proporcionen contexto adicional o información necesaria para la ejecución de la tarea.
10. Historial de Cambios

Rastreo de Modificaciones: Un registro de todos los cambios realizados en el ticket, incluyendo actualizaciones de estado, reasignaciones y modificaciones en los detalles o prioridades.

Ejemplo de un Ticket de trabajo bien formulado
Un ticket de trabajo bien estructurado es crucial para la gestión eficiente de proyectos Agile. Debe proporcionar toda la información necesaria de manera clara y accesible para facilitar la ejecución de las tareas y la colaboración entre los miembros del equipo. Aquí te mostramos un ejemplo que puedes usar como referencia, e incluso usar como plantilla en tu asistente IA para estructurar la información de una manera estándar para tus proyectos:

Título: Implementación de Autenticación de Dos Factores (2FA)

Descripción: Añadir autenticación de dos factores para mejorar la seguridad del login de usuarios. Debe soportar aplicaciones de autenticación como Authenticator y mensajes SMS.

Criterios de Aceptación:

Los usuarios pueden seleccionar 2FA desde su perfil.
Soporte para Google Authenticator y SMS.
Los usuarios deben confirmar el dispositivo 2FA durante la configuración.
Prioridad: Alta

Estimación: 8 puntos de historia

Asignado a: Equipo de Backend

Etiquetas: Seguridad, Backend, Sprint 10

Comentarios: Verificar la compatibilidad con la base de usuarios internacionales para el envío de SMS.

Enlaces: Documento de Especificación de Requerimientos de Seguridad

Historial de Cambios:

01/10/2023: Creado por [nombre]
05/10/2023: Prioridad actualizada a Alta por [nombre]
```

**Prompt 2:**

```
En la sección historial de cambios pon: creado por Jorge, elimina "Se agregaron índices en id_transaccion para optimización" y elimina los iconos
```

**Prompt 3:**

```

```

---

### 7. Pull Requests

**Prompt 1:**

```
crea un archivo readme donde incluyas un resumen de todo lo que se implementó hasta el momento en este proyecto, incluye la creación del back, las bases de datos, los endpoints, los servicios, las vistas del frontend y los tests que hemos creado. este resumen de cambios servira para incluirlo como descripción en un pull request así que se breve y conciso.
```

**Prompt 2:**

```
ahora actualiza la sección de pull requests. en el pull request numero 2 registra que se entrega el proyecto con las configuraciones de despliegue del proyecto.

esta configuración de railway.toml y las modificaciones del dockerfile para la migración de la base de datos es incorrecta
```

**Prompt 3:**

```

```
