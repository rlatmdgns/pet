import Cookies from 'js-cookie'

export const getToken = () => Cookies.get('access-token')

interface SteadResponse extends Response {
  data?: any
}

export const handleResponse = async <T>(response: SteadResponse) => {
  const data = await response.json()

  if (!response.ok) {
    console.error(data)
  }

  return data as T
}
