import { take, put, call, fork, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions'
import * as apis from '../service/apis'

//template func
function* watchGetEntities(type, addr, schema, schemaID) {
  while (true) {
    yield take(actions[type].GET_ENTITIES)

    yield put({ type: actions[type].REQUEST })

    try {
      let config = {
        url: addr
      }

      //console.log('call get api: %o, %o, %o', apis.get, config, schema)
      let payload = yield call(apis.get, config, schema)
      //console.log('get payload: %o', payload)

      let { count, previous, next } = payload.result
      Object.assign(payload.entities[schemaID], { count, previous, next })
      //console.log('Get payloads: %o', payload)

      yield put({ type: actions[type].ADD_ENTITIES, payload: payload.entities[schemaID] })
      yield put({ type: actions[type].ADD_RESULTS, payload: payload.result.results })
      yield put({ type: actions[type].SUCCESS })
    } catch (err) {
      yield put({ type: actions[type].FAILURE })
    }
  }
}

function* create(which, addr, action) {
  let { type, ...payload } = action

  yield put({ type: actions[which].REQUEST })

  try {
    let config = {
      url: addr,
      method: 'POST',
      body: JSON.stringify(payload)
    }

    let m = yield call(apis.create, config)
    yield put({ type: actions[which].CREATE_ENTITIES_ENTITIES, payload: m })
    yield put({ type: actions[which].CREATE_ENTITIES_RESULTS, payload: m })
    yield put({ type: actions[which].SUCCESS })
  } catch (err) {
    //console.log('saga del fail: %o', err)
    yield put({ type: actions[which].FAILURE })
  }

}

function* watchCreateEntities(type, addr) {
  yield takeEvery(actions[type].CREATE_ENTITIES, create, type, addr)
}

function* del(which, addr, action) {
  let { type, ...payload } = action
  yield put({ type: actions[which].REQUEST })

  let { id } = payload

  try {

    let config = {
      url: `${addr}${id}/`,
      method: 'DELETE',
      isJson: false
    }

    yield call(apis.del, config)
    yield put({ type: actions[which].DEL_ENTITIES_RESULTS, id })
    yield put({ type: actions[which].DEL_ENTITIES_ENTITIES, id })
    yield put({ type: actions[which].SUCCESS })
  } catch (err) {
    //console.log('saga del fail: %o', err)
    yield put({ type: actions[which].FAILURE })
  }

}

function* watchDelEntities(type, addr) {
  yield takeEvery(actions[type].DEL_ENTITIES, del, type, addr)
}


function* update(which, addr, action) {
  yield put({ type: actions[which].REQUEST })

  let { type, ...payload } = action
  try {
    //console.log('saga update payload: %o', payload)
    let config = {
      url: `${addr}${payload.id}/`,
      method: 'PATCH',
      body: JSON.stringify(payload)
    }

    let m = yield call(apis.update, config)
    yield put({ type: actions[which].UPDATE_ENTITIES_ENTITIES, payload: m })
    yield put({ type: actions[which].UPDATE_ENTITIES_RESULTS, payload: m })
    yield put({ type: actions[which].SUCCESS })
  } catch (err) {
    //console.log('saga del fail: %o', err)
    yield put({ type: actions[which].FAILURE })
  }
}

function* watchUpdateEntities(type, addr) {
  yield takeEvery(actions[type].UPDATE_ENTITIES, update, type, addr)
}

export const genEntityWatching = (type, addr, schema, schemaID) => {
  return [
    fork(watchGetEntities, type, addr, schema, schemaID),
    fork(watchCreateEntities, type, addr),
    fork(watchUpdateEntities, type, addr),
    fork(watchDelEntities, type, addr)
  ]
}

