import { getEnterpriseId, getToken, handleResponse } from '@/src/shared/lib/helper'
import { BASE_URL } from '@/src/shared/constants'

export const headers = () => {
  return {
    accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${getToken()}`,
    'enterprise-id': `${getEnterpriseId()}`,
  }
}

export const http = {
  externalGet: async <T>(url: string, cache?: RequestCache): Promise<T> => {
    const response = await fetch(`${url}`, {
      method: 'GET',
      cache: cache || 'no-store',
    })
    return handleResponse<T>(response)
  },

  get: async <T>(url: string, cache?: RequestCache): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: headers(),
      cache: cache || 'no-store',
    })
    return handleResponse<T>(response)
  },

  post: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },

  postForm: async <R>(url: string, formData: FormData): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${getToken()}`,
        'enterprise-id': `${getEnterpriseId()}`,
      },
      body: formData,
    })
    return handleResponse<R>(response)
  },

  put: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },

  patch: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },

  delete: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },
}
