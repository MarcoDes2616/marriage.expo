import axios from 'axios';
import { API_BASE_URL } from '@env'; // Importa la variable de entorno

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Usa la URL base de las variables de entorno
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
