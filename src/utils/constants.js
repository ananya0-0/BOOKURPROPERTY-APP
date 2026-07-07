export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const AUTH_ENDPOINTS = {
  EMAIL_START: '/api/auth/email/start',
  EMAIL_VERIFY: '/api/auth/email/verify',
  LOGOUT: '/api/auth/logout',
};

export const PROPERTY_ENDPOINTS = {
  LIST: '/api/properties',
  DETAIL: (id) => `/api/properties/${id}`,
  SCHEMA: '/api/properties/schema',
  MINE: '/api/properties/mine',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};