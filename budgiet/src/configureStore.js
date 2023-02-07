import { createStore } from 'redux'

import transactionReducer from './components/reducer/transactions'

export default function configureStore(preloadedState) {

  const store = createStore(transactionReducer, preloadedState)

  return store
}