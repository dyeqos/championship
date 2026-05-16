import { Notify } from 'quasar';

const POSITION = 'top';
const PROGRESS = true;

export const notifySuccess = (message: string) => {
  Notify.create({
    type: 'positive',
    message,
    position: POSITION,
    progress: PROGRESS,
  });
};
export const notifyInfo = (message: string) => {
  Notify.create({
    type: 'info',
    message,
    position: POSITION,
    progress: PROGRESS,
  });
};

export const notifyError = (message: string) => {
  Notify.create({
    type: 'warning',
    message,
    position: POSITION,
    progress: PROGRESS,
  });
};
