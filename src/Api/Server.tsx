import axios from 'axios';

const Server = axios.create({
  baseURL: 'https://camiestas-futbol.effectstudios.co/api/v1',
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Server;

