import { createStore, combineReducers } from 'redux'
import variantReducer from './state/variant'

const rootReducer = combineReducers({
    variant: variantReducer,
})

export const store = createStore(
    rootReducer
    )
    
export type IRootState = ReturnType<typeof rootReducer>