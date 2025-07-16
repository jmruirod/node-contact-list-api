export interface Person {
  id: number;
  name: string;
  number: string;
}

export type PersonRequest = Omit<Person, "id">;
