import { Request, Response } from "express";
import { PersonRequest } from "~/models/person";
import { personsService as service } from "~/services/person";

export const personController = {
  getAll: (_request: Request, response: Response) => {
    const persons = service.getAll();
    response.json(persons);
  },
  info: (_request: Request, response: Response) => {
    response.send(`<p>Phonebook has info for ${service.info()} people</p>
      <p>${new Date()}</p>`);
  },
  getById: (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const person = service.getById(id);

    if (!person) {
      response.statusMessage = "No se ha encontrado el usuario";
      response.status(404).end();
      return;
    }

    response.json(person);
  },
  delete: (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const person = service.getById(id);

    if (!person) {
      response.statusMessage = "No se ha encontrado el usuario";
      response.status(404).end();
      return;
    }

    service.delete(id);

    response.status(204).end();
  },
  create: (request: Request, response: Response) => {
    const body = request.body;

    if (!body.name) {
      response.status(400).json({ error: "name required" });
      return;
    }

    if (!body.number) {
      response.status(400).json({ error: "number required" });
      return;
    }

    if (service.getByName(body.name)) {
      response.status(400).json({ error: "name must be unique" });
      return;
    }

    const personRequest: PersonRequest = { name: body.name, number: body.number };
    const newPerson = service.create(personRequest);

    response.json(newPerson);
  },
};
