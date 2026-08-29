import { parse, isValid, format } from 'date-fns';

const FORMAT_DATE = 'dd/MM/yyyy';

export const isValidDate = (fecha: string): boolean => {
  const fechaParseada = parse(fecha, FORMAT_DATE, new Date());

  return isValid(fechaParseada) && format(fechaParseada, FORMAT_DATE) === fecha;
};
