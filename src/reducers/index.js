import { combineReducers } from 'redux'
import _ from 'lodash'
import * as actions from '../actions'

const foobar = (state = [], action) => {
	return state
}

export function changeStatus(types) {
	const [requestType, successType, failureType] = types

	return function updateStatus(state = {}, action) {
		switch (action.type) {
			case requestType:
				return Object.assign({}, state, {
					isFetching: true
				})
			case successType:
				return Object.assign({}, state, {
					isFetching: false,
				})
			case failureType:
				return Object.assign({}, state, {
					isFetching: false,
					errMsg: action.errMsg
				})
			default:
				return state
		}
	}
}

export const changeEntities = types => {
	const [add, create, update, del] = types

	return function updateStatus(state = {}, action) {
		// console.log('update entities status: %o, %o', types, action)
		switch (action.type) {
			case add:
				return Object.assign({}, action.payload)

			case del:
				return _.omit(state, [action.id])

			case update:
			case create:
				return Object.assign({}, state, { [action.payload.id]: action.payload })
		}

		return state
	}
}

export const changeResults = types => {
	const [add, create, update, del] = types

	return function updateStatus(state = [], action) {
		// console.log('update result status: %o, %o', types, action, add)
		switch (action.type) {
			case add:
				return action.payload.slice()

			case del:
				return state.filter(item => item !== action.id)

			case create:
				let tmp = state.slice()
				tmp.push(action.payload.id)
				return tmp
		}

		return state
	}

}


////////////////////////////////////////////////////////////////////////
const materialsEntities = (state = {}, action) => {
	// console.log('entities actions: %o', action)
	switch (action.type) {
		case actions.ADD_MATERIALS_ENTITIES:
			return Object.assign({}, action.materials)

		case actions.DEL_MATERIAL_ENTITIES:
			return _.omit(state, [action.id])

		case actions.UPDATE_MATERIAL_ENTITIES:
		case actions.CREATE_MATERIALS_ENTITIES:
			return Object.assign({}, state, { [action.material.id]: action.material })
	}

	return state
}

const materialsResults = (state = [], action) => {
	// console.log('result actions: %o', action)
	switch (action.type) {
		case actions.ADD_MATERIALS_RESULTS:
			return action.materials.slice()

		case actions.DEL_MATERIAL_RESULTS:
			return state.filter(item => item !== action.id)

		case actions.CREATE_MATERIALS_RESULTS:
			let tmp = state.slice()
			tmp.push(action.material.id)
			return tmp
	}

	return state
}

const status = combineReducers({
	material: changeStatus([actions.materialStatus.REQUEST, actions.materialStatus.SUCCESS, actions.materialStatus.FAILURE]),
	cookbook: changeStatus([actions.COOKBOOK.REQUEST, actions.COOKBOOK.SUCCESS, actions.COOKBOOK.FAILURE]),

	step: changeStatus([actions.STEP.REQUEST, actions.STEP.SUCCESS, actions.STEP.FAILURE]),

	ingredient: changeStatus([actions.INGREDIENT.REQUEST, actions.INGREDIENT.SUCCESS, actions.INGREDIENT.FAILURE]),

	image: changeStatus([actions.IMAGE.REQUEST, actions.IMAGE.SUCCESS, actions.IMAGE.FAILURE]),

	category: changeStatus([actions.CATEGORY.REQUEST, actions.CATEGORY.SUCCESS, actions.CATEGORY.FAILURE]),
	recommend: changeStatus([actions.RECOMMEND.REQUEST, actions.RECOMMEND.SUCCESS, actions.RECOMMEND.FAILURE]),
	menuset: changeStatus([actions.MENUSET.REQUEST, actions.MENUSET.SUCCESS, actions.MENUSET.FAILURE]),

	market: changeStatus([actions.MARKET.REQUEST, actions.MARKET.SUCCESS, actions.MARKET.FAILURE]),
	restaurant: changeStatus([actions.RESTAURANT.REQUEST, actions.RESTAURANT.SUCCESS, actions.RESTAURANT.FAILURE])
})

const entities = combineReducers({
	materials: materialsEntities,
	cookbooks: changeEntities([
		actions.COOKBOOK.ADD_ENTITIES,
		actions.COOKBOOK.CREATE_ENTITIES_ENTITIES,
		actions.COOKBOOK.UPDATE_ENTITIES_ENTITIES,
		actions.COOKBOOK.DEL_ENTITIES_ENTITIES,
	]),
	steps: changeEntities([
		actions.STEP.ADD_ENTITIES,
		actions.STEP.CREATE_ENTITIES_ENTITIES,
		actions.STEP.UPDATE_ENTITIES_ENTITIES,
		actions.STEP.DEL_ENTITIES_ENTITIES,
	]),
	ingredients: changeEntities([
		actions.INGREDIENT.ADD_ENTITIES,
		actions.INGREDIENT.CREATE_ENTITIES_ENTITIES,
		actions.INGREDIENT.UPDATE_ENTITIES_ENTITIES,
		actions.INGREDIENT.DEL_ENTITIES_ENTITIES,
	]),

	images: changeEntities([
		actions.IMAGE.ADD_ENTITIES,
		actions.IMAGE.CREATE_ENTITIES_ENTITIES,
		actions.IMAGE.UPDATE_ENTITIES_ENTITIES,
		actions.IMAGE.DEL_ENTITIES_ENTITIES,
	]),

	categories: changeEntities([
		actions.CATEGORY.ADD_ENTITIES,
		actions.CATEGORY.CREATE_ENTITIES_ENTITIES,
		actions.CATEGORY.UPDATE_ENTITIES_ENTITIES,
		actions.CATEGORY.DEL_ENTITIES_ENTITIES,
	]),
	recommends: changeEntities([
		actions.RECOMMEND.ADD_ENTITIES,
		actions.RECOMMEND.CREATE_ENTITIES_ENTITIES,
		actions.RECOMMEND.UPDATE_ENTITIES_ENTITIES,
		actions.RECOMMEND.DEL_ENTITIES_ENTITIES,
	]),
	menuset: changeEntities([
		actions.MENUSET.ADD_ENTITIES,
		actions.MENUSET.CREATE_ENTITIES_ENTITIES,
		actions.MENUSET.UPDATE_ENTITIES_ENTITIES,
		actions.MENUSET.DEL_ENTITIES_ENTITIES,
	]),

	markets: changeEntities([
		actions.MARKET.ADD_ENTITIES,
		actions.MARKET.CREATE_ENTITIES_ENTITIES,
		actions.MARKET.UPDATE_ENTITIES_ENTITIES,
		actions.MARKET.DEL_ENTITIES_ENTITIES,
	]),

	restaurants: changeEntities([
		actions.RESTAURANT.ADD_ENTITIES,
		actions.RESTAURANT.CREATE_ENTITIES_ENTITIES,
		actions.RESTAURANT.UPDATE_ENTITIES_ENTITIES,
		actions.RESTAURANT.DEL_ENTITIES_ENTITIES,
	])
})

const results = combineReducers({
	materials: materialsResults,
	cookbooks: changeResults([
		actions.COOKBOOK.ADD_RESULTS,
		actions.COOKBOOK.CREATE_ENTITIES_RESULTS,
		actions.COOKBOOK.UPDATE_ENTITIES_RESULTS,
		actions.COOKBOOK.DEL_ENTITIES_RESULTS,
	]),
	steps: changeResults([
		actions.STEP.ADD_RESULTS,
		actions.STEP.CREATE_ENTITIES_RESULTS,
		actions.STEP.UPDATE_ENTITIES_RESULTS,
		actions.STEP.DEL_ENTITIES_RESULTS,
	]),
	ingredients: changeResults([
		actions.INGREDIENT.ADD_RESULTS,
		actions.INGREDIENT.CREATE_ENTITIES_RESULTS,
		actions.INGREDIENT.UPDATE_ENTITIES_RESULTS,
		actions.INGREDIENT.DEL_ENTITIES_RESULTS,
	]),

	images: changeResults([
		actions.IMAGE.ADD_RESULTS,
		actions.IMAGE.CREATE_ENTITIES_RESULTS,
		actions.IMAGE.UPDATE_ENTITIES_RESULTS,
		actions.IMAGE.DEL_ENTITIES_RESULTS,
	]),

	categories: changeResults([
		actions.CATEGORY.ADD_RESULTS,
		actions.CATEGORY.CREATE_ENTITIES_RESULTS,
		actions.CATEGORY.UPDATE_ENTITIES_RESULTS,
		actions.CATEGORY.DEL_ENTITIES_RESULTS,
	]),
	recommends: changeResults([
		actions.RECOMMEND.ADD_RESULTS,
		actions.RECOMMEND.CREATE_ENTITIES_RESULTS,
		actions.RECOMMEND.UPDATE_ENTITIES_RESULTS,
		actions.RECOMMEND.DEL_ENTITIES_RESULTS,
	]),

	markets: changeResults([
		actions.MARKET.ADD_RESULTS,
		actions.MARKET.CREATE_ENTITIES_RESULTS,
		actions.MARKET.UPDATE_ENTITIES_RESULTS,
		actions.MARKET.DEL_ENTITIES_RESULTS,
	]),

	restaurants: changeResults([
		actions.RESTAURANT.ADD_RESULTS,
		actions.RESTAURANT.CREATE_ENTITIES_RESULTS,
		actions.RESTAURANT.UPDATE_ENTITIES_RESULTS,
		actions.RESTAURANT.DEL_ENTITIES_RESULTS,
	]),
	menuset: changeResults([
		actions.MENUSET.ADD_RESULTS,
		actions.MENUSET.CREATE_ENTITIES_RESULTS,
		actions.MENUSET.UPDATE_ENTITIES_RESULTS,
		actions.MENUSET.DEL_ENTITIES_RESULTS,
	]),

})

export const appReducer = combineReducers({
	entities,
	results,
	status,
})
