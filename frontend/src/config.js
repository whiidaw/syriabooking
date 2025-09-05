// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-render-url.onrender.com/api' // Replace with your actual Render URL
  : 'http://localhost:8800/api';

export default API_BASE_URL;
