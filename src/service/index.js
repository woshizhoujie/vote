import { address, language, app, storage, UKCities } from './Information'
import { request } from './WebService'

var appService = {
  request,
}

var appInfo = {
  address,
  language,
  app,
  storage,
  UKCities,
}

export { appService, appInfo}