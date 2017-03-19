/**
 * Global app variables and infomation
 */

const serviceDomain = 'http://api.unitraderuk.com/'

const address = {
  domain: serviceDomain,
  domainNoSlash: 'http://api.unitraderuk.com',

  //account
  register: `${serviceDomain}auth/register/`,
  login: `${serviceDomain}auth/login/`,
  me: `${serviceDomain}account/me/`,
  logout: `${serviceDomain}auth/logout/`,
  passwordModify: `${serviceDomain}auth/password/`,

  //location
  geo: 'https://maps.googleapis.com/maps/api/geocode/json?',

  //goods
  goodsHots: `${serviceDomain}goods/hots/`,
  goodsCategory: `${serviceDomain}goods/categories/`,
  goodsNearby: `${serviceDomain}goods/nearby/`,
  goodsIssue: `${serviceDomain}goods/create/`,
  goodsMark: `${serviceDomain}base/mark/`,
  goodsUnmark: `${serviceDomain}base/unmark/`,
  goodsFavourite: `${serviceDomain}base/favorites/`,
  goodsUpdate: `${serviceDomain}goods/update/`,
  goodsHotsByCity: `${serviceDomain}goods/hots_by_city/`,

  //tenement
  tenementIssue: `${serviceDomain}tenement/create/`,
  tenement: `${serviceDomain}tenement/all/`,
  tenementUpdate: `${serviceDomain}tenement/update/`,
  tenementBooking: `${serviceDomain}tenement/booking/`,

  //entertainment
  etttCities: `${serviceDomain}entertainment/cities/`,
  etttCategories: `${serviceDomain}entertainment/categories/`,
  etttNearby: `${serviceDomain}entertainment/nearby/`,
  etttHots: `${serviceDomain}entertainment/hots/`,
  etttBooking: `${serviceDomain}entertainment/booking/`,


  //discovery
  discoverySections: `${serviceDomain}discovery/section/`,
  discoveryQuestionList: `${serviceDomain}discovery/question/all/`,
  discoveryQuestionDetail: `${serviceDomain}discovery/question/`,
  discoveryQuestionCreate: `${serviceDomain}discovery/question/create/`,
  discoveryAnswerCreate: `${serviceDomain}discovery/answer/create/`,
  discoveryQuestionImags: `${serviceDomain}discovery/upload_batch/`,
  discoveryQuestionMe: `${serviceDomain}discovery/question/me/`,
  discoveryRmQuestion: `${serviceDomain}discovery/question/delete/`,

  //mall
  mallCities: `${serviceDomain}mall/cities/`,
  mallSellers: `${serviceDomain}mall/businesses/`,
  mallSellerGoods: `${serviceDomain}mall/goods/`,
  mallOrderCreate: `${serviceDomain}mall/orders/create/`,
  mallOrders: `${serviceDomain}mall/orders/`,

  //chat
  chatPull: `${serviceDomain}chat/pull/`,
  chatPush: `${serviceDomain}chat/push/`,
  chatHistory: `${serviceDomain}chat/history/`,
  chatQuery: `${serviceDomain}chat/query/`,

  //Image upload
  imageUpload: `${serviceDomain}base/upload_batch/`,
  changeAvatar: `${serviceDomain}avatar/modify_base64/`,

  //search
  baseSearch: `${serviceDomain}base/search/`,

  //other
  posters: `${serviceDomain}other/banners/`,
  myPublishes: `${serviceDomain}base/publishs/`,
  delPublish: `${serviceDomain}base/delete/`,
  delPic: `${serviceDomain}base/upload_delete/`,
  addView: `${serviceDomain}base/view_count/`,
}

const language = {
  zh: 'zh',
  en: 'en',
}

const storage = {
  token: 'unitraderTokenKey',
  chat: 'unitraderChatKey',
  language: 'unitraderLanguageKey'
}

var app = {
  name: 'unitrader',
  version: '1.0.0',
  hasPosition: false,
  hasCity: false,
  i18n: language.zh,
  accessToken: '',
  city: '曼彻斯特',
  lat: 0,
  lng: 0,
  geoKey: 'AIzaSyBkh3bQ6NYBswRD_YVw5eFdbY41TtQltqA',
  haveUnreadChat: false,

  me: {

  },

  //biz
  bizType: {
    goods: '二手物品',
    tenement: '租房',
    ettt: '娱乐',
    mall: '电子商城',
  },

  goods: {
    //goods category
    categories: [],
    newer: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  //tenement
  tenement: {
    categories: [
      { id: 0, name: '长租' },
      { id: 1, name: '短租' },
      { id: 2, name: '合租' },
    ],
  },
//entertain
entertainment:{
  categories:[]
},
  chat: {
    list: [

    ],

    unread: [

    ],
  },
}


var UKCities = [
  '曼彻斯特',
  '伦敦',
  '伯明翰',
  '爱丁堡',
  '利兹',
  '谢菲尔德',
  '约克',
  '华威',
  '剑桥',
  '牛津',
  '利物浦',
  '格拉斯哥',
  '诺丁汉',
  '纽卡斯尔',
  '卡迪夫',
  '杜伦',
  '兰卡斯特',
  '桑德兰',
  '普雷斯顿',
  '黑泽',
  '布莱德福德',
  '考文垂',
  '切斯特',
  '德比',
  '赫尔',
  '莱斯特',
  '林肯',
  '拉夫堡',
  '皮特伯勒',
  '斯托克',
  '伍尔弗汉普顿',
  '巴斯',
  '贝德福德',
  '伯恩茅斯',
  '布莱顿',
  '布里斯托',
  '埃特伯雷',
  '奇切斯特',
  '科尔切斯特',
  '艾克赛特',
  '法尔茅斯',
  '格罗斯特',
  '肯特',
  '米顿凯恩斯',
  '北安普顿',
  '诺维奇',
  '普利茅斯',
  '朴茨茅斯',
  '雷丁',
  '南安普顿',
  '萨里',
  '温切斯特',
  '阿伯丁',
  '邓迪',
  '因弗内斯',
  '圣安德鲁斯',
  '斯特林',
  '阿伯里斯特维斯',
  '班戈',
  '纽波特',
  '斯旺西',
  '雷克瑟姆',
  '贝尔法斯特',
  '都柏林',
  '哈德斯菲尔德',
  '博尔顿',
  '莱恩河纽卡斯尔',
  '法尔默',
  '英格兰',
  '索尔福德',
  '伊尔基斯顿',
  '奥平顿',
  '克罗伊登',
  '惠灵顿',
  '斯旺利',
  '纳尼顿',
  '珀斯',
  '霍夫',
  '阿克斯布里奇',
  '拉德克利夫',
  '埃奇韦尔',
  '阿普敏斯特',
  '黑潭',
  '米德尔斯伯勒',
  '瑟比顿',
  '盖茨黑德',
  '文布利',
  '斯丘恩',
  '梅登黑德',
  '赫尔河畔金斯顿',
  '埃克赛特',
  '吉尔福德',
  '达勒姆',
  '唐卡斯特',
  '哈罗',
  '安德莱姆',
  '鲍里斯',
  '沃灵顿',
  '查塔姆',
  '庞特普里斯',
  '吉灵厄姆',
  '米菲尔德',
  '贝肯纳姆',
  '沃特比奇',
  '米彻姆',
  '斯托克波特',
  '迪赛德',
  '雷利',
  '伊尔福德',
  '斯彭尼穆尔',
  '梅布尔索普',
  '汤顿',
]


export { address, language, app, storage, UKCities }