import rootReducer from './reducer'

export type RootState = ReturnType<typeof rootReducer>

export type PromiseReturnType<T> = T extends PromiseLike<infer U> ? U : T
