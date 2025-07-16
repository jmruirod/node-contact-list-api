import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Agenda telefónica",
      version: "1.0.0",
      description: "Ejercicios del curso Full Stack",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJSDoc(swaggerOptions);
