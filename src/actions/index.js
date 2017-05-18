//fetch status
const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

//entity actions
const GET_ENTITIES = 'GET_ENTITIES'
const ADD_ENTITIES = 'ADD_ENTITIES'
const ADD_RESULTS = 'ADD_RESULTS'

const CREATE_ENTITIES = 'CREATE_ENTITIES'
const CREATE_ENTITIES_ENTITIES = 'CREATE_ENTITIES_ENTITIES'
const CREATE_ENTITIES_RESULTS = 'CREATE_ENTITIES_RESULTS'

const UPDATE_ENTITIES = 'UPDATE_ENTITIES'
const UPDATE_ENTITIES_ENTITIES = 'UPDATE_ENTITIES_ENTITIES'
const UPDATE_ENTITIES_RESULTS = 'UPDATE_ENTITIES_RESULTS'

const DEL_ENTITIES = 'DEL_ENTITIES'
const DEL_ENTITIES_ENTITIES = 'DEL_ENTITIES_ENTITIES'
const DEL_ENTITIES_RESULTS = 'DEL_ENTITIES_RESULTS'

//wrap funtions
const createRequestTypes = base => {
	return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

const action = (type, payload = {}) => {
	return { type, ...payload }
}

const genEntityActions = name => {
	return [
		GET_ENTITIES, ADD_ENTITIES, ADD_RESULTS,
		CREATE_ENTITIES, CREATE_ENTITIES_ENTITIES, CREATE_ENTITIES_RESULTS,
		UPDATE_ENTITIES, UPDATE_ENTITIES_ENTITIES, UPDATE_ENTITIES_RESULTS,
		DEL_ENTITIES, DEL_ENTITIES_ENTITIES, DEL_ENTITIES_RESULTS,
		REQUEST, SUCCESS, FAILURE
	].reduce((acc, type) => {
		acc[type] = `${type}_${name}`
		return acc
	}, {})
}

const genActionMethods = actions => {
	let relation = {
		'get': GET_ENTITIES,
		'create': CREATE_ENTITIES,
		'update': UPDATE_ENTITIES,
		'del': DEL_ENTITIES
	}
	return ['get', 'create', 'update', 'del'].reduce((acc, type) => {
		acc[type] = payload => action(actions[relation[type]], payload)
		return acc
	}, {})
}

// -----------------------------------------------------------------------------------
//action types

//materilas
export const MATERIAL = 'MATERIAL'

export const GET_MATERIALS = 'GET_MATERIALS'
export const ADD_MATERIALS_ENTITIES = 'ADD_MATERIALS_ENTITIES'
export const ADD_MATERIALS_RESULTS = 'ADD_MATERIALS_RESULTS'

export const CREATE_MATERIALS = 'CREATE_MATERIALS'
export const CREATE_MATERIALS_ENTITIES = 'CREATE_MATERIALS_ENTITIES'
export const CREATE_MATERIALS_RESULTS = 'CREATE_MATERIALS_RESULTS'

export const UPDATE_MATERIALS = 'UPDATE_MATERIALS'
export const UPDATE_MATERIAL_ENTITIES = 'UPDATE_MATERIALS_ENTITIES'
export const UPDATE_MATERIAL_RESULTS = 'UPDATE_MATERIALS_RESULTS'

export const DEL_MATERIALS = 'DEL_MATERIALS'
export const DEL_MATERIAL_ENTITIES = 'DEL_MATERIALS_ENTITIES'
export const DEL_MATERIAL_RESULTS = 'DEL_MATERIALS_RESULTS'

//fetch status actions
//materials
export const materialStatus = createRequestTypes(MATERIAL)

console.log('material status: %o', materialStatus)

//action creators
//materials
export const getMaterials = () => action(GET_MATERIALS)
export const createMaterials = materials => action(CREATE_MATERIALS, materials)
export const updateMaterials = materials => action(UPDATE_MATERIALS, materials)
export const delMaterials = materials => action(DEL_MATERIALS, materials)

//---------------------------------------------------------------------------------
//cookbooks
export const COOKBOOK_ID = 'COOKBOOK'
export const COOKBOOK = genEntityActions(COOKBOOK_ID)
export const COOKBOOK_METHODS = genActionMethods(COOKBOOK)

console.log("cookbook actions: %o, methods: %o", COOKBOOK, COOKBOOK_METHODS)

// steps
export const STEP_ID = 'STEP'
export const STEP = genEntityActions(STEP_ID)
export const STEP_METHODS = genActionMethods(STEP)

//Ingredients
export const INGREDIENT_ID = 'INGREDIENT'
export const INGREDIENT = genEntityActions(INGREDIENT_ID)
export const INGREDIENT_METHODS = genActionMethods(INGREDIENT)

//images
export const IMAGE_ID = 'IMAGE'
export const IMAGE = genEntityActions(IMAGE_ID)
export const IMAGE_METHODS = genActionMethods(IMAGE)

//categorys
export const CATEGORY_ID = 'CATEGORY'
export const CATEGORY = genEntityActions(CATEGORY_ID)
export const CATEGORY_METHODS = genActionMethods(CATEGORY)

//recommends
export const RECOMMEND_ID = 'RECOMMEND'
export const RECOMMEND = genEntityActions(RECOMMEND_ID)
export const RECOMMEND_METHODS = genActionMethods(RECOMMEND)

//menuset
export const MENUSET_ID = 'MENUSET'
export const MENUSET = genEntityActions(MENUSET_ID)
export const MENUSET_METHODS = genActionMethods(MENUSET)

//markets
export const MARKET_ID = 'MARKET'
export const MARKET = genEntityActions(MARKET_ID)
export const MARKET_METHODS = genActionMethods(MARKET)

//restaurant
export const RESTAURANT_ID = 'RESTAURANT'
export const RESTAURANT = genEntityActions(RESTAURANT_ID)
export const RESTAURANT_METHODS = genActionMethods(RESTAURANT)