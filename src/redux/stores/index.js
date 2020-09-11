import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 中间件，有了这个就可以支持异步action
import rootReducer from '../reducers/currentUser' // 所有的reducer

const loggerMiddleware = createLogger({ collapsed: true })

const middleware = applyMiddleware(loggerMiddleware, thunk)
const thunkMiddleware = applyMiddleware(thunk)

// 创建store
// eslint-disable-next-line import/no-mutable-exports
let store
if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeWithDevTools(middleware))
} else {
  store = createStore(rootReducer, thunkMiddleware)
}

export default store
