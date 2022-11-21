// теперь используется redux toolkit. npm install @reduxjs/toolkit 

import {configureStore} from "@reduxjs/toolkit"; //redux toolkit - импортируем configureStore
import chatPageReducer from './chatPageReducer'; //импортируем редьюсеры 

let store = configureStore({ //создаем стор не createstore, a configureStore!!!
    reducer: {
        chatPage: chatPageReducer
        //здесь находятся все редьюсеры в форме свойство(страничка): значение(необх редьюсер)
    } 
})
    //создаем объект, который имеет reducer: {все остальные редьюсеры}

export default store;

// //Функция configureStore

// //Данный инструмент позволяет автоматически комбинировать редьюсеры, 
//добавить мидлвары Redux (по умолчанию включает redux-thunk), а также использовать 
//расширение Redux DevTools. В качестве входных параметров функция configureStore принимает объект со следующими свойствами:

// reducer — набор пользовательских редьюсеров, !!!
// middleware — опциональный параметр, задающий массив мидлваров, предназначенных для подключения к хранилищу,
// devTools — параметр логического типа, позволяющий включить установленное в браузер расширение Redux DevTools (значение по умолчанию — true),
// preloadedState — опциональный параметр, задающий начальное состояние хранилища,
// enhancers — опциональный параметр, задающий набор усилителей.