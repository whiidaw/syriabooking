// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://syriabooking-production.up.railway.app/api' // Railway backend URL
  : 'http://localhost:8800/api';

export default API_BASE_URL;
