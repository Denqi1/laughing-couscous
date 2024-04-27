import { isAxiosError } from 'axios';
import { instance } from './axios.config';

instance.interceptors.response.use(
  (result) => {
    return result;
  },
  (error) => {
    if (isAxiosError(error)) {
      if (!error.response || !error.response.data) {
        console.error(error.message);
      } else {
        console.error(error.response.data.status_message);
      }
    } else if (error instanceof Error) {
      console.error(error.name + ': ' + error.message);
    }
  }
);
