import API from './api';
import { PROPERTY_ENDPOINTS } from '../utils/constants';

export const getProperties = async (params = {}) => {
  const { data } = await API.get(PROPERTY_ENDPOINTS.LIST, { params });
  return data;
};

export const getProperty = async (id) => {
  const { data } = await API.get(PROPERTY_ENDPOINTS.DETAIL(id));
  return data;
};

export const getMyProperties = async () => {
  const { data } = await API.get(PROPERTY_ENDPOINTS.MINE);
  return data;
};

export const getSchema = async (intent, category, type) => {
  const { data } = await API.get(PROPERTY_ENDPOINTS.SCHEMA, {
    params: { intent, category, type },
  });
  return data;
};
