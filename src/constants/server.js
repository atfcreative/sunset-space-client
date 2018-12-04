const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? 'gttps://ss-test-server-herokuapp.com'
: 'http://localhost:4000';

export default PAYMENT_SERVER_URL;
