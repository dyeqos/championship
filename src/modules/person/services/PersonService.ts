import { api } from 'src/boot/axios';
import type { PersonInterface } from '../interfaces/PersonInterface';

export const personService = {
  //   async createPerson(payload: PersonFormInterface): Promise<Person> {
  //     const { data } = await api.post('/Person', payload);
  //     return data;
  //   },
  async getPersons(id: string): Promise<PersonInterface[]> {
    const { data } = await api.get('/persons', {
      params: { id },
    });
    return data;
  },
  async getPersonsByNumberIdentifier(numberIdentifier: number): Promise<PersonInterface> {
    const { data } = await api.get('/persons', {
      params: { numberIdentifier },
    });
    return data;
  },
};
