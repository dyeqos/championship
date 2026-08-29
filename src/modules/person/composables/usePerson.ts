import { personStore } from '../store/PersonStore';
import { personService } from '../services/PersonService';
import { notifyInfo } from 'src/platform/tools/utils/NotifyUtil';
import { AxiosError } from 'axios';

const usePerson = () => {
  const store = personStore();
  const { getPersonsByNumberIdentifier } = personService;

  const searchPerson = async () => {
    try {
      if (!store.person.numberIdentifier) {
        notifyInfo('Debe ingresar un número de identificación para buscar la persona.');
        return;
      }
      const person = await getPersonsByNumberIdentifier(store.person.numberIdentifier);
      if (person) {
        store.setPerson(person);
        store.setDisableFormSearch(true);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        notifyInfo('Debe registrar como nueva persona.');
        store.setDisableFormSearch(false);
      }
    }
  };
  return {
    searchPerson,
  };
};

export default usePerson;
