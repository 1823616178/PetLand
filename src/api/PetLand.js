import requests from '@/utils/requests.js'

export function leaveWord(query) {
  return requests({
    url: '/',
    method: 'get',
    param: query
  })
}
