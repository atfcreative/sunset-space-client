const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? 'http://myapi.com'
: 'http://localhost:4000';

export default PAYMENT_SERVER_URL;