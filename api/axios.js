import axios from 'axios';
import { EXPO_PUBLIC_API } from '@env';

const axiosInstance = axios.create({
  baseURL: EXPO_PUBLIC_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Puedes añadir interceptores aquí si necesitas manejar errores o respuestas globalmente
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
