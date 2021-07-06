import { createStore as reduxCreateStore, combineReducers } from 'redux'
import { UsersReducer } from '../users/reducers'

export default function createStore() {
  // 返すものは、reduxのcreateStore（reduxCreateStoreという名称にしている）
  return reduxCreateStore(
    // combineReducersはreducerを統合したもの
    combineReducers({
      users: UsersReducer,
    })
  )
}
