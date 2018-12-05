const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? 'http://sunset-space-server-herokuapp.com'
: 'http://localhost:4000';

export default PAYMENT_SERVER_URL;
