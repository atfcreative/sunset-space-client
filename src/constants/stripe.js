// Use dotenv to read .env vars into Node
require('dotenv').config();
// const MY_PUBLISHABLE_KEY = process.env.MY_PUBLISHABLE_KEY;

const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_live_MY_PUBLISHABLE_KEY'
: 'pk_test_PIxI2b4ctUOU8W2WcIP3aCTa';

export default STRIPE_PUBLISHABLE;