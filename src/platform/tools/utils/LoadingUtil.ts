import { Loading, QSpinnerGears } from 'quasar';

export const showLoading = (options?: { message?: string }) => {
  Loading.show({
    message: options?.message || 'Loading...', // optional, default is 'Loading...'
    spinner: QSpinnerGears, // optional, default is 'QSpinnerDots'
    spinnerColor: 'white', // optional, default is 'white'
    backgroundColor: 'black', // optional, default is 'black'
    messageColor: 'white', // optional, default is 'white'
    boxClass: 'my-loading-box', // optional, default is ''
    spinnerSize: 100, // optional, default is 50
    delay: 0, // optional, default is 0
    // can be a number or a string, e.g. '5s' or '5000ms'
    // if delay is set, the loading indicator will only show after the specified delay time has passed
  });
};

export const hideLoading = () => {
  Loading.hide();
};
