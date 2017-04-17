import image from '../themes/Image'
const menus = [
	{ name: '首　页', link: '/' },
	{ name: '所有问卷', link: '/List' },
	{ name: '上传问卷', link: '/Up' },
	{ name: '新手指导', link: '/NewPerson' },
]

const subMenus = [
	{ id: 1, name: '二手物品', img: Image.BannerList1, link_id: 1, link: '/SecondHand' },
	{ id: 2, name: '租房信息', img: Image.BannerList2, link_id: 2, link: '/TenementInfo' },
	{ id: 3, name: '娱乐美食', img: Image.BannerList3, link_id: 3, link: '/EntertainFood' },
	{ id: 4, name: '家政服务', img: Image.BannerList2, link_id: 4, link: '/HouseKeeping' },
	{ id: 5, name: '个人中心', img: Image.BannerList3, link_id: 5, link: '/PersonalCenter' },
	{ id: 6, name: '搜索', img: Image.BannerList1, link_id: 6, link: '/SearchPage' }
]
export { menus, subMenus } 