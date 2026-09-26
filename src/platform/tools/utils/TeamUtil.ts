export const getTeamStates = (): { description: string; value: number }[] => {
  return [
    { description: 'Pendiente', value: 1 },
    { description: 'Por Autorizar', value: 2 },
    { description: 'Activo', value: 3 },
  ];
};
