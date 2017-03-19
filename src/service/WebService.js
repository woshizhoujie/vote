/**
 * Wrap web srvice process detail 
 */

import { app } from './Information'

/**
 * @param  {} url
 * @param  {} body=null
 * @param  {} hasCert=true
 * @param  {} method='GET'
 */
function request(url, body = null, hasCert = true, method = 'GET', isJson = true) {
  let elements = {
    method: method
  }

  if (body !== null) {
    elements.body = body
  }

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (hasCert) {
    headers.Authorization = 'Token ' + app.accessToken
  }
  headers['Accept-Language'] = app.i18n

  elements.headers = headers

  // console.log("Web service request: %s, headers: %o", url, elements)

  return (
    fetch(url, elements)
      .then((response) => {
        // console.log("Get response:%o", response)
        if (!response.ok) {
          console.log("Get fail response:%o", response)
          let error = new Error(response.statusText)
          error.response = response
          throw error
        }

        return isJson ? response.json() : response.text()
      })
  )
}

export { request }
