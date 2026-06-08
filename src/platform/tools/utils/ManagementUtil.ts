import { getYearNow } from './DateUtil';

export const getManagementYears = () => {
  const currentYear = getYearNow();
  return [currentYear, currentYear + 1].map((year) => ({
    value: year,
    description: String(year),
  }));
};
