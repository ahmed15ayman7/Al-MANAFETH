import { BASE_URL } from './config';
const appendQueryParams = (url: string, params: Record<string, any> = {}, isBaseUrl = true) => {
  const query = new URLSearchParams(params).toString();
  return query ? `${isBaseUrl ? BASE_URL : ''}${url}?${query}` : `${isBaseUrl ? BASE_URL : ''}${url}`;
};
const API_ENDPOINTS = {
  auth: {
    register: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/register', params, isBaseUrl),
    login: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/login', params, isBaseUrl),
    changePassword: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/change-password', params, isBaseUrl),
    resendVerificationCode: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/resend-verification-code', params, isBaseUrl),
    verifyAccount: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/verify-account', params, isBaseUrl),
    refreshToken: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/refresh', params, isBaseUrl),
    deleteAccount: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/auth-admin/delete-account', params, isBaseUrl),
  },
  categories: {
    getAll: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/categories', params, isBaseUrl),
    create: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/categories', params, isBaseUrl),
    update: (id: string, params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams(`/categories/${id}`, params, isBaseUrl),
    delete: (id: string, params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams(`/categories/${id}`, params, isBaseUrl),
  },
  services: {
    getAll: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/services', params, isBaseUrl),
    create: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/services', params, isBaseUrl),
    getById: (id: string, params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams(`/services/${id}`, params, isBaseUrl),
    update: (id: string, params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams(`/services/${id}`, params, isBaseUrl),
    delete: (id: string, params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams(`/services/${id}`, params, isBaseUrl),
  },
  stores: {
    getAll: (params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams('/stores', params, isBaseUrl),
    getById: (id: string, params: Record<string, any>, isBaseUrl: boolean = true) => appendQueryParams(`/stores/${id}`, params, isBaseUrl),
  },
 };

export default API_ENDPOINTS;
