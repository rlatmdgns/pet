import { API_URL } from '@/src/shared/constants/api'
import { http } from '@/src/shared/lib/http'

export const login = (social: 'GOOGLE' | 'KAKAO') => {
  return http.get(API_URL.LOGIN(social))
}
