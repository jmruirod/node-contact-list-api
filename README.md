# API de Agenda Telefónica - Node.js

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1+-black.svg)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-6.2+-green.svg)](https://swagger.io/)

> **Ejercicios del curso Full Stack Open - Parte 3**  
> Este proyecto forma parte de los ejercicios del [apartado 3 de Full Stack Open](https://fullstackopen.com/es/part3), donde se desarrolla una API REST completa para gestionar una agenda telefónica.

## Características

- **API REST completa** para gestión de contactos
- **TypeScript** para tipado estático y mejor desarrollo
- **Express.js** como framework web
- **Swagger/OpenAPI** para documentación automática
- **Middleware personalizado** para logging y manejo de errores
- **Arquitectura modular** con separación de responsabilidades
- **ESLint + Prettier** para calidad de código

## 📋 Endpoints Disponibles

| Método   | Endpoint            | Descripción                 |
| -------- | ------------------- | --------------------------- |
| `GET`    | `/api/persons`      | Obtener todos los contactos |
| `GET`    | `/api/persons/info` | Información de la agenda    |
| `GET`    | `/api/persons/:id`  | Obtener contacto por ID     |
| `POST`   | `/api/persons`      | Crear nuevo contacto        |
| `DELETE` | `/api/persons/:id`  | Eliminar contacto           |

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Lenguaje**: TypeScript
- **Documentación**: Swagger/OpenAPI
- **Herramientas de desarrollo**: ESLint, Prettier, TSup
- **Gestor de paquetes**: pnpm

## Instalación

1. **Clona el repositorio**

   ```bash
   git clone <tu-repositorio>
   cd node-contact-list-api
   ```

2. **Instala las dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm serve
   ```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
pnpm serve          # Ejecuta el servidor con hot reload

# Producción
pnpm build          # Compila el proyecto
pnpm start          # Ejecuta la versión compilada

# Calidad de código
pnpm eslint-check-only  # Verifica el código con ESLint
pnpm eslint-fix         # Corrige errores de ESLint automáticamente
pnpm prettier           # Formatea el código con Prettier
```

## Uso de la API

### Ejemplo de creación de contacto

```bash
curl -X POST http://localhost:3000/api/persons \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "number": "123-456-7890"
  }'
```

### Ejemplo de obtención de contactos

```bash
curl http://localhost:3000/api/persons
```

## 📚 Documentación API

La documentación completa de la API está disponible en:

- **Swagger UI**: http://localhost:3000/
- **Especificación OpenAPI**: Automáticamente generada

## 🏗️ Estructura del Proyecto

```
src/
├── controllers/     # Controladores de la aplicación
├── middlewares/     # Middlewares personalizados
├── models/          # Modelos de datos
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
├── db/             # Configuración de base de datos
├── docs/           # Documentación Swagger
└── index.ts        # Punto de entrada de la aplicación
```

## 📝 Licencia

Este proyecto es parte de los ejercicios educativos de [Full Stack Open](https://fullstackopen.com/).

---

**Desarrollado como parte del curso Full Stack Open - Parte 3**  
🌐 [Visita el curso completo](https://fullstackopen.com/es/part3)
