import { getToken, handleResponse } from '@/src/shared/lib/helper'
import { BASE_URL } from '@/src/shared/constants/url'

export const headers = () => {
  return {
    authorization: `Bearer ${getToken()}`,
  }
}

export const http = {
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
