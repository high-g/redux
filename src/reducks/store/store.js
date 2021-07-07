import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { UsersReducer } from '../users/reducers'

export default function createStore(history) {
  // 返すものは、reduxのcreateStore（reduxCreateStoreという名称にしている）
  return reduxCreateStore(
    // combineReducersはreducerを統合したもの
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  )
}
