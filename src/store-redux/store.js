import chatPageReducer from './chatPageReducer';

let store = {
    _state: {chatPage: {
        initialText: "Hi", 
        messages: [
            {id: 1, text: "What's up"},
            {id: 2, text: "What's going on here?"},
            {id: 3, text: "I have no idea"},
            {id: 4, text: "Me too"},
            {id: 5, text: ":("}

        ]
    }},
    _callSubscriber(){
    }, //уведомить подписчика - в данном случае подписчиком является rerenderEntireTree
    getState() { //this method simply returns state
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //for now to rerender the whole tree to see the differencies in store
    },

    // addPost() { //this function is exported to be thrown to Chat component props to get the input value 
    //     let element = { id: 6, text: this._state.chatPage.initialText}; //this elem is pushed to the store
    //     this._state.chatPage.messages.push(element);
    //     this._state.chatPage.initialText = "";
    //     this._callSubscriber() // сейчас этой функции передалась функция rerenderEntireTree, т.к в index.js 
    //     //мы вызвали subscribe(observer) и передали в качестве аргумента функцию rerenderEntireTree
    // },
    // changeInput(newText) { // newText is what came from input (what we typed in)
    //     this._state.chatPage.initialText = newText; // this function is thrown to the Chat component to get the input value (each symbol we type in)
    //     this._callSubscriber(); //for now to rerender the whole tree to see the differencies in store
    // },
    dispatch(action) { // type: CHANGE_INPUT, newText: data
        this._state.chatPage = chatPageReducer(this._state.chatPage, action); //chatPageReducer(chatPage, {type: CHANGE_INPUT, newText: data})
        this._callSubscriber(this._state); //we do not callSubscriber in reducers so we do this in dispatch method
    }

};

//export default store;

// let addPost = () => { //this function is exported to be thrown to Chat component props to get the input value 
//     let element = { id: 6, text: store.chatPage.initialText}; //this elem is pushed to the store
//     store.chatPage.messages.push(element);
//     store.chatPage.initialText = "";
//     rerenderEntireTree() //for now to rerender the whole tree to see the differencies in store
// }

// let changeInput = (newText) => {
//     store.chatPage.initialText = newText; // this function is thrown to the Chat component to get the input value (each symbol we type in)
//     rerenderEntireTree(); //for now to rerender the whole tree to see the differencies in store
// }

// let subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

// export {addPost, changeInput, subscribe};