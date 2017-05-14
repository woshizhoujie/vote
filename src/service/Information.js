/**
 * Global app variables and infomation
 */

const serviceDomain = 'http://dongwu-inc.com:10012'


const address = {
	domain: serviceDomain,
	//登录
	login: `${serviceDomain}/users/login/`,
	//注册
	register: `${serviceDomain}/users/register/`
}

const storage = {
	token: 'questionnaireTokenKey',
	chat: 'questionnaireChatKey',
	// language: 'questionnaireLanguageKey'
}

var app = {
	name: 'question',
	version: '1.0.0',
	hasPosition: false,
	hasCity: false,
	accessToken: '',
	geoKey: 'AIzaSyBkh3bQ6NYBswRD_YVw5eFdbY41TtQltqA',
	haveUnreadChat: false,
}

export { address, app, storage }