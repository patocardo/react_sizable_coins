import '@testing-library/jest-dom';
// global-mocks.js
const fetchPolifill = require('whatwg-fetch')

global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Respons
// import dotenv from 'dotenv';
// dotenv.config();