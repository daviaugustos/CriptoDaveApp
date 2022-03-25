import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import HouseReducer from '~/store/House/HouseCreators'
import SagaConfig from '~/store/SagaConfig'

const ReducerConfig = combineReducers({
  house: HouseReducer,
})

export const SagaMiddleware = createSagaMiddleware()

export type TApplicationState = ReturnType<typeof ReducerConfig>

const store: Store<TApplicationState> = createStore(
  ReducerConfig,
  applyMiddleware(SagaMiddleware),
)
SagaMiddleware.run(SagaConfig)

export default store
