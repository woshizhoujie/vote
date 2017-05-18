import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from '../actions'
import * as apis from '../service/apis'
import * as schemas from '../service/normalizer'
import { address } from '../service/address'
import { genEntityWatching } from './meta'

function* watchGetMaterials() {
	while (true) {
		yield take(actions.GET_MATERIALS)

		yield put({ type: actions.materialStatus.REQUEST })

		try {
			let materials = yield call(apis.getMaterials)
			console.log('materials', materials)

			let { count, previous, next } = materials.result
			Object.assign(materials.entities.materials, { count, previous, next })
			console.log('Get materails: %o', materials)

			yield put({ type: actions.ADD_MATERIALS_ENTITIES, materials: materials.entities.materials })
			yield put({ type: actions.ADD_MATERIALS_RESULTS, materials: materials.result.results })
			yield put({ type: actions.materialStatus.SUCCESS })
		} catch (err) {
			yield put({ type: actions.materialStatus.FAILURE })
		}
	}
}

function* watchDelMaterials() {
	while (true) {
		let { id } = yield take(actions.DEL_MATERIALS)

		yield put({ type: actions.materialStatus.REQUEST })

		try {
			yield call(apis.delMaterials, id)
			yield put({ type: actions.DEL_MATERIAL_RESULTS, id })
			yield put({ type: actions.DEL_MATERIAL_ENTITIES, id })
			yield put({ type: actions.materialStatus.SUCCESS })
		} catch (err) {
			console.log('saga del fail: %o', err)
			yield put({ type: actions.materialStatus.FAILURE })
		}
	}
}

function* watchUpdateMaterials() {
	while (true) {
		let material = yield take(actions.UPDATE_MATERIALS)

		yield put({ type: actions.materialStatus.REQUEST })

		try {
			console.log('update material: %o', material)
			yield call(apis.updateMaterial, material)
			yield put({ type: actions.UPDATE_MATERIAL_ENTITIES, material })
			yield put({ type: actions.UPDATE_MATERIAL_RESULTS, material })
			yield put({ type: actions.materialStatus.SUCCESS })
		} catch (err) {
			console.log('saga del fail: %o', err)
			yield put({ type: actions.materialStatus.FAILURE })
		}
	}
}

function* watchCreateMaterials() {
	while (true) {
		let material = yield take(actions.CREATE_MATERIALS)

		console.log('saga material: %o', material)

		yield put({ type: actions.materialStatus.REQUEST })

		try {
			let m = yield call(apis.createMaterial, material)
			yield put({ type: actions.CREATE_MATERIALS_ENTITIES, material: m })
			yield put({ type: actions.CREATE_MATERIALS_RESULTS, material: m })
			yield put({ type: actions.materialStatus.SUCCESS })
		} catch (err) {
			console.log('saga del fail: %o', err)
			yield put({ type: actions.materialStatus.FAILURE })
		}
	}
}

function* watchCreateCookbooks() {
	while (true) {
		let payload = yield take(actions.COOKBOOK_ID.CREATE_ENTITIES_COOKBOOK)

		console.log('saga cookbook create: %o', payload)

		// let { steps, ingredients, chinese_title, germany_title, chinese_description, germany_description,
		// 	chinese_notice, germany_notice, cover, pepper_level, difficult_level
		//  } = payload

		// let cookbook = {
		// 	chinese_title,
		// 	germany_title,
		// 	chinese_description,
		// 	germany_description,
		// 	chinese_notice,
		// 	germany_notice,
		// 	cover,
		// 	pepper_level,
		// 	difficult_level
		// }

		yield put({ type: actions.COOKBOOK_ID.REQUEST })

		try {
			let config = {
				url: address.cookbooks,
				method: 'POST',
				body: JSON.stringify(payload)
			}

			let body = JSON.stringify(payload)
			console.log('cookbook stringfy: %o', body)

			let m = yield call(apis.create, config)
			console.log('cookbook: %o', m)

			yield put({ type: actions.COOKBOOK_ID.CREATE_ENTITIES_ENTITIES, payload: m })
			yield put({ type: actions.COOKBOOK_ID.CREATE_ENTITIES_RESULTS, payload: m })
			yield put({ type: actions.COOKBOOK_ID.SUCCESS })
		} catch (err) {
			//console.log('saga del fail: %o', err)
			yield put({ type: actions.COOKBOOK_ID.FAILURE })
		}
	}
}

export default function* root() {
	let materials = [
		fork(watchGetMaterials),
		fork(watchDelMaterials),
		fork(watchCreateMaterials),
		fork(watchUpdateMaterials)
	]



	let cookbooks = genEntityWatching(
		actions.COOKBOOK_ID,
		address.cookbooks,
		{ results: [schemas.cookbooksSchema] },
		schemas.cookbookSchemaID
	)
	console.log('cookbooks: %o', cookbooks)

	let cookbookSaga = [
		cookbooks[0], cookbooks[2], cookbooks[3], fork(watchCreateCookbooks)
	]
	console.log('cookbooks: %o', cookbookSaga)

	let steps = genEntityWatching(
		actions.STEP_ID,
		address.steps,
		{ results: [schemas.stepsSchema] },
		schemas.stepSchemaID
	)

	let ingredients = genEntityWatching(
		actions.INGREDIENT_ID,
		address.ingredients,
		{ results: [schemas.ingredientsSchema] },
		schemas.ingredientSchemaID
	)

	let images = genEntityWatching(
		actions.IMAGE_ID,
		address.images,
		{ results: [schemas.imagesSchema] },
		schemas.imageSchemaID
	)

	let categorys = genEntityWatching(
		actions.CATEGORY_ID,
		address.categories,
		{ results: [schemas.categoriesSchema] },
		schemas.categorySchemaID
	)

	let recommends = genEntityWatching(
		actions.RECOMMEND_ID,
		address.recommends,
		{ results: [schemas.recommendsSchema] },
		schemas.recommendSchemaID
	)

	let menuset = genEntityWatching(
		actions.MENUSET_ID,
		address.menuset,
		{ results: [schemas.menusetSchema] },
		schemas.menusetSchemaID
	)

	let markets = genEntityWatching(
		actions.MARKET_ID,
		address.markets,
		{ results: [schemas.marketsSchema] },
		schemas.marketSchemaID
	)

	let restaurants = genEntityWatching(
		actions.RESTAURANT_ID,
		address.restaurants,
		{ results: [schemas.restaurantsSchema] },
		schemas.restaurantSchemaID
	)

	yield [...materials, ...cookbooks, ...categorys,
	...recommends, ...steps, ...ingredients, ...images,
	...markets, ...restaurants, ...menuset]
}