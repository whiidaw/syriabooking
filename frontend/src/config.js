// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://us-central1-bookingsy-a0ecb.cloudfunctions.net/api' // Firebase Functions URL
  : 'http://localhost:8800/api';

export default API_BASE_URL;
