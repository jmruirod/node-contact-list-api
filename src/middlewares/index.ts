import { Request, Response } from "express";
import morgan from "morgan";

morgan.token("body", (request: Request) => {
  return JSON.stringify(request.body);
});

export const morganConfig = morgan(
  "\n-----\n:date\nMethod: :method\nRoute: :url\nStatus: :status\nBody: :body\n-----",
);

export const unknownEndpoint = (_request: Request, response: Response) => {
  response.status(404).send({ error: "Route not found" });
};
