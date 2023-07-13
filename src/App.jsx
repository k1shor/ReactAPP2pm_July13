import MyRoutes from "./MyRoutes";
import './assets/mystyle.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GlobalContextProvider } from "./Hooks/GlobalContext";
import { combineReducers, createStore } from "redux";
import counterReducer from "./redux/counterReducer";
import { Provider } from "react-redux";
import { gameReducer } from "./redux/gameReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import { PersistGate } from 'redux-persist/integration/react'


function App() {

  // let myStore = createStore(counterReducer)
  // let myStore = createStore(gameReducer)

  let rootReducer = combineReducers({
    counterStore: counterReducer,
    gameStore: gameReducer
  })

  const persistConfig = {
    key: 'root',
    storage,
  }

  const myPersistedReducer = persistReducer(persistConfig, rootReducer)

  // let myStore= createStore(rootReducer)
  let myStore= createStore(myPersistedReducer)
  let myPersistor = persistStore(myStore)

  return (
    <>
      <Provider store={myStore}>
      <PersistGate loading={null} persistor={myPersistor}>
        <GlobalContextProvider>
          <MyRoutes />
        </GlobalContextProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
