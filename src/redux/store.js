import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import saga from './saga'
import  reducer  from './reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware()

export default configureStore(
  {
  reducer,
  middleware:()=>[sagaMiddleware]
  }
)

sagaMiddleware.run(saga)