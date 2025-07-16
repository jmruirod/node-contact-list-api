import { Router } from "express";
import { personController } from "~/controllers/person";

const route = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - number
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la persona
 *           example: 1
 *         name:
 *           type: string
 *           description: Nombre de la persona
 *           example: "Juan Pérez"
 *         number:
 *           type: string
 *           description: Número de teléfono
 *           example: "123-456-7890"
 *     PersonRequest:
 *       type: object
 *       required:
 *         - name
 *         - number
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la persona
 *           example: "Juan Pérez"
 *         number:
 *           type: string
 *           description: Número de teléfono
 *           example: "123-456-7890"
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Mensaje de error
 *           example: "name required"
 */

/**
 * @swagger
 * /api/persons:
 *   get:
 *     summary: Obtener todas las personas
 *     description: Retorna una lista de todas las personas en la agenda telefónica
 *     tags: [Personas]
 *     responses:
 *       200:
 *         description: Lista de personas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 *             example:
 *               - id: 1
 *                 name: "Juan Pérez"
 *                 number: "123-456-7890"
 *               - id: 2
 *                 name: "María García"
 *                 number: "098-765-4321"
 */
route.get("/persons", personController.getAll);

/**
 * @swagger
 * /api/persons/info:
 *   get:
 *     summary: Obtener información de la agenda
 *     description: Retorna información sobre el número total de personas en la agenda
 *     tags: [Personas]
 *     responses:
 *       200:
 *         description: Información obtenida exitosamente
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *             example: "<p>Phonebook has info for 2 people</p><p>2024-01-15T10:30:00.000Z</p>"
 */
route.get("/persons/info", personController.info);

/**
 * @swagger
 * /api/persons/{id}:
 *   get:
 *     summary: Obtener persona por ID
 *     description: Retorna una persona específica por su ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la persona
 *         example: 1
 *     responses:
 *       200:
 *         description: Persona encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *             example:
 *               id: 1
 *               name: "Juan Pérez"
 *               number: "123-456-7890"
 *       404:
 *         description: Persona no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusMessage:
 *                   type: string
 *                   example: "No se ha encontrado el usuario"
 */
route.get("/persons/:id", personController.getById);

/**
 * @swagger
 * /api/persons/{id}:
 *   delete:
 *     summary: Eliminar persona
 *     description: Elimina una persona de la agenda por su ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la persona a eliminar
 *         example: 1
 *     responses:
 *       204:
 *         description: Persona eliminada exitosamente
 *       404:
 *         description: Persona no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusMessage:
 *                   type: string
 *                   example: "No se ha encontrado el usuario"
 */
route.delete("/persons/:id", personController.delete);

/**
 * @swagger
 * /api/persons:
 *   post:
 *     summary: Crear nueva persona
 *     description: Crea una nueva persona en la agenda telefónica
 *     tags: [Personas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonRequest'
 *           example:
 *             name: "Ana López"
 *             number: "555-123-4567"
 *     responses:
 *       200:
 *         description: Persona creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *             example:
 *               id: 3
 *               name: "Ana López"
 *               number: "555-123-4567"
 *       400:
 *         description: Error en la validación de datos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             examples:
 *               nameRequired:
 *                 summary: Nombre requerido
 *                 value:
 *                   error: "name required"
 *               numberRequired:
 *                 summary: Número requerido
 *                 value:
 *                   error: "number required"
 *               nameNotUnique:
 *                 summary: Nombre duplicado
 *                 value:
 *                   error: "name must be unique"
 */
route.post("/persons", personController.create);

export { route as userRoute };
