import Client from './client';

const cachios = require('cachios');

const cachiosInstance = cachios.create(Client);

export default cachiosInstance;
