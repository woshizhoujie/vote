import { address, app, storage } from './Information'
import { request } from './WebService'
import { loginAlert } from './utils.js'
var appService = {
	request,
}

var appInfo = {
	address,
	app,
	storage,
}

var utils = {
	loginAlert,
}

export { appService, appInfo, utils }