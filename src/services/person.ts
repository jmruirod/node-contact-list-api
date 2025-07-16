import { generateId, persons } from "~/db/persons";
import { PersonRequest } from "~/models/person";

export const personsService = {
  getAll: () => persons,
  info: () => persons.length,
  getById: (id: number) => persons.find((person) => person.id === id),
  delete: (id: number) => {
    const index = persons.findIndex((person) => person.id === id);
    persons.splice(index, 1);
  },
  create: (personRequest: PersonRequest) => {
    const id = generateId();
    const newPerson = { id, ...personRequest };
    persons.push(newPerson);
    return newPerson;
  },
  getByName: (name: string) => persons.find((person) => person.name === name),
};
