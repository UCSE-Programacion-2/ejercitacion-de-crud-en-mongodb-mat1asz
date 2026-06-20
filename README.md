[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/O4bx0ul3)
# Ejercitación: CRUD en MongoDB con Node.js

En esta ejercitación, ampliarás el servidor construido en la ejercitación anterior ("MongoDB Driver") para implementar las operaciones faltantes del CRUD (Crear, Actualizar y Eliminar).

## Requisitos previos

- Haber completado la ejercitación anterior (`Ejercitacion-de-MongoDB-Driver`).
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) con tu IP habilitada para conectarse.
- Haber completado la importación del archivo `world-cup.json` en la base de datos `MundialDB`, colección `equipos`.

## Instalación y Configuración

1. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Configura tus variables de entorno:
   - Duplica el archivo `.env.example` y renómbralo a `.env`.
   - Reemplaza `<usuario>`, `<password>`, `<cluster>`, y `<NombreApp>` por los datos reales de tu conexión a MongoDB Atlas.

3. Restaura tu código de la ejercitación pasada:
   - Copia tu resolución del archivo `src/mongodb.js` de la ejercitación pasada hacia este nuevo repositorio.
   - Abre `server.js` y **copia** tus resoluciones de los métodos `GET /equipos`, `GET /equipos/buscar`, y `GET /equipos/:id` dentro de los bloques correspondientes. También asegúrate de incluir el código de tu middleware de inyección.

4. Levanta el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

## Tareas a realizar

Abre el archivo `server.js`. Allí encontrarás nuevos comentarios `TODO` que indican dónde debes codificar para implementar el resto del CRUD:

1. **Endpoint `POST /equipos` (Crear)**:
   - Extrae `equipo`, `tecnico`, `continente` y `campeonatos_mundiales` del `req.body`.
   - Implementa validaciones básicas: verifica que todos los campos existan y tengan el tipo correcto (strings para los primeros tres, number para el último). Si fallan las validaciones, retorna status `400` y un JSON con `{ error: "mensaje" }`.
   - Si es válido, utiliza `req.collection.insertOne()` para guardar el documento.
   - Retorna status `201` y el documento creado.

2. **Endpoint `PUT /equipos/:id` (Actualizar)**:
   - Valida que el ID recibido sea válido usando `ObjectId.isValid()`.
   - Extrae y valida los campos de `req.body` tal como hiciste en el POST.
   - Utiliza `req.collection.updateOne()` con el operador `$set` para modificar el documento correspondiente.
   - Si el documento no existe (`matchedCount === 0`), retorna status `404`.
   - Si se actualiza correctamente, retorna status `200` y un mensaje de éxito.

3. **Endpoint `DELETE /equipos/:id` (Eliminar)**:
   - Valida que el ID recibido sea válido.
   - Utiliza `req.collection.deleteOne()` para eliminar el documento.
   - Si el documento no existía (`deletedCount === 0`), retorna status `404`.
   - Si se elimina correctamente, retorna status `200` y un mensaje de éxito.

## Pruebas

Se incluyen pruebas automatizadas con Jest. Puedes ejecutar todas las pruebas con el siguiente comando:

```bash
npm test
```

Asegúrate de que todas las pruebas pasen (aparezcan en verde) antes de realizar tu entrega. También puedes probar manualmente los endpoints utilizando el archivo `api.http` con la extensión REST Client.
