import { configureStore } from '@reduxjs/toolkit';
import {contactsReduser}  from '../store/contactListSlice/sliceContactList';
import { filterReduser } from './sliceFilter';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'contacts',
    storage,
    // whitelist: ['contacts'],
}

const persistedReducer = persistReducer(persistConfig, contactsReduser)
const reducer = {
    contacts: persistedReducer,
    filter: filterReduser,
}

export const store = configureStore({
    reducer,
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
////---------------------------------------------------
// import { counterReduser } from './counter/counterReduser';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { todoReduser } from './todoWithSlise/sliceTodo';

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const reducer = combineReducers({
//     counter: counterReduser,
//     todo: todoReduser,
// })

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({reducer: persistedReducer})
//  export const persistor = persistStore(store)
////---------------------------------------------------
// import { counterReduser } from './counter/counterReduser';
// import { configureStore } from '@reduxjs/toolkit';
// import { todoReduser } from './todoWithSlise/sliceTodo';


// const reducer = {
//     counter: counterReduser,
//     todo: todoReduser,
// }
// export const store = configureStore({reducer})
