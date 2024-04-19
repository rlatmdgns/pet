import Cookies from 'js-cookie'

export const getToken = () => Cookies.get('token')
export const getEnterpriseId = () => Cookies.get('enterpriseId')

interface SteadResponse extends Response {
  data?: any
}

export const handleResponse = async <T>(response: SteadResponse) => {
  const data = await response.json()

  if (!response.ok) {
    Cookies.remove('token')
    Cookies.remove('enterpriseId')
  }

  if (!response.ok) {
    console.error(data)
  }

  return data as T
}
