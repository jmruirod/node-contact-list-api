import { Request, Response, NextFunction, response } from "express";

export const logger = (request: Request, _response: Response, next: NextFunction) => {
  if (request.path.startsWith("/api/") && !request.path.includes("swagger")) {
    console.log(`${new Date().toISOString()} - ${request.method} ${request.path}`);
  }
  next();
};

export const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: "Route not found" });
};
